interface FoxLogoProps {
  className?: string
  size?: number
}

export function FoxLogo({ className = '', size = 32 }: FoxLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4L6 14L8 26L16 22L24 26L26 14L16 4Z"
        fill="#111111"
        stroke="#FF6A00"
        strokeWidth="1.2"
      />
      <path d="M16 10L14 18L16 21L18 18L16 10Z" fill="#FF6A00" opacity="0.85" />
      <circle cx="13" cy="14.5" r="1.2" fill="#FF6A00" />
      <circle cx="19" cy="14.5" r="1.2" fill="#FF6A00" />
      <path
        d="M16 21L14 24L16 28L18 24L16 21Z"
        fill="#FF6A00"
        opacity="0.4"
      />
    </svg>
  )
}
