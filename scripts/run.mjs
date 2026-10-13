import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { delimiter, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function majorFromBin(bin) {
  if (bin === process.execPath) {
    return Number(process.versions.node.split('.')[0])
  }
  const result = spawnSync(bin, ['-p', 'process.versions.node'], { encoding: 'utf8' })
  if (result.status !== 0) return 0
  return Number((result.stdout || '').trim().split('.')[0])
}

function findNode20() {
  if (majorFromBin(process.execPath) >= 20) return process.execPath

  const candidates = []
  const nvmDir = process.env.NVM_DIR || join(homedir(), '.nvm')
  const versionsDir = join(nvmDir, 'versions', 'node')

  if (existsSync(versionsDir)) {
    for (const version of readdirSync(versionsDir)) {
      if (!/^v(2[0-9]|[3-9]\d)/.test(version)) continue
      candidates.push(join(versionsDir, version, 'bin', 'node'))
    }
  }

  candidates.push('/opt/homebrew/bin/node', '/usr/local/bin/node')

  for (const bin of candidates.sort().reverse()) {
    if (existsSync(bin) && majorFromBin(bin) >= 20) return bin
  }

  return null
}

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Usage: node scripts/run.mjs <command> [args...]')
  process.exit(1)
}

const nodeBin = findNode20()
if (!nodeBin) {
  console.error(`
Node 20+ is required (current: ${process.version}).
Vite 8 does not support Node 16.

Fix:
  nvm install 20
  nvm use 20
  nvm alias default 20

Then re-run this command.
`)
  process.exit(1)
}

const env = {
  ...process.env,
  PATH: [dirname(nodeBin), process.env.PATH].filter(Boolean).join(delimiter),
}

if (nodeBin !== process.execPath) {
  const version = spawnSync(nodeBin, ['-p', 'process.version'], { encoding: 'utf8' }).stdout.trim()
  console.log(`Using ${version} (was ${process.version})`)
}

const [command, ...commandArgs] = args
const result = spawnSync(command, commandArgs, {
  stdio: 'inherit',
  env,
  shell: process.platform === 'win32',
  cwd: join(__dirname, '..'),
})

process.exit(result.status ?? 1)
