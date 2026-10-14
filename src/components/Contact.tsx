import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { MagneticButton } from "./MagneticButton";
import { siteInfo, socialLinks } from "../data/site";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Fiverr from "../assets/fiverr.png";
import Whatsapp from "../assets/whatsapp.png";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={
          reduceMotion
            ? {}
            : {
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,106,0,0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,106,0,0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,106,0,0.08) 0%, transparent 50%)",
              ],
            }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader
          number="07"
          title="Have a Project in Mind?"
          subtitle="Let's build something smart, scalable and impossible to ignore."
          align="center"
        />

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-fox/40 via-fox/10 to-cyan/20 opacity-60 blur-sm" />
          <div className="relative glass rounded-3xl p-8 md:p-14 text-center border border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <MagneticButton href={`https://wa.me/923402031088`} type="a">
                Start a Conversation
              </MagneticButton>
              <MagneticButton
                variant="outline"
                href={`mailto:${siteInfo.email}`}
                type="a"
              >
                <Mail size={16} />
                Email Me
              </MagneticButton>
            </div>

            <motion.div
              initial={reduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-secondary mb-8"
            >
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-fox transition-colors no-underline text-text-secondary"
              >
                <Mail size={16} />
                {siteInfo.email}
              </a>
              <span className="hidden sm:inline text-white/15">|</span>
              <a href="https://www.google.com/maps/place/Jhansi+St,+New+Kumbharwara,+Karachi,+Pakistan/@24.874838,67.0022706,790m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3eb33e241fa0f5db:0xe1ca7cf1597a7acc!8m2!3d24.874838!4d67.0048455!16s%2Fg%2F1ptvwwt61?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="pointer inline-flex items-center gap-2">
                <MapPin size={16} />
                {siteInfo.location}
              </a>
              <span className="hidden sm:inline text-white/15">|</span>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 hover:text-fox transition-colors no-underline text-text-secondary"
              >
                <Phone size={16} />
                {siteInfo.phone}
              </a>
            </motion.div>

            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.name}
                  href={link.href}
                  aria-disabled={link.placeholder}
                  aria-label={
                    link.placeholder ? `${link.name} (coming soon)` : link.name
                  }
                  initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.05 }}
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-xs font-semibold text-text-secondary hover:text-fox hover:border-fox/30 hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] transition-all no-underline ${link.placeholder ? "pointer-events-none opacity-50" : ""
                    }`}
                  onClick={
                    link.placeholder ? (e) => e.preventDefault() : undefined
                  }
                >
                  {/* <a href={link.href} target="_blank" rel="noopener noreferrer"> */}
                  <img
                    src={
                      link.name === "GitHub"
                        ? GitHub
                        : link.name === "LinkedIn"
                          ? LinkedIn
                          : link.name === "Whatsapp"
                            ? Whatsapp
                            : Fiverr

                    }
                    style={{
                      filter: "invert(1) brightness(0.8)",
                      height: "20px",
                      width: "20px",
                    }}
                    alt={link.name}
                  />
                  {/* </a> */}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
