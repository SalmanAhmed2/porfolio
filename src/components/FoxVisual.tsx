import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

const techBadges = [
  { label: "React", x: "-140%", y: "-100%", delay: 0 },
  { label: "Next.js", x: "130%", y: "-25%", delay: 0.15 },
  { label: "TypeScript", x: "-125%", y: "90%", delay: 0.3 },
  { label: "Node.js", x: "128%", y: "55%", delay: 0.45 },
  { label: "React Native", x: "-150%", y: "-30%", delay: 0.6 },
  { label: "MongoDB", x: "150%", y: "30%", delay: 0.75 },
  { label: "Material UI", x: "-55%", y: "-130%", delay: 0.9 },
  { label: "Tailwind CSS", x: "30%", y: "130%", delay: 1.05 },
  { label: "Ant Design", x: "70%", y: "-100%", delay: 1.2 },
];

export function FoxVisual() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / 35);
      mouseY.set((e.clientY - cy) / 35);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, mouseX, mouseY]);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[320px] md:min-h-[500px]">
      {/* Rotating ring */}
      {!reduceMotion && (
        <motion.div
          className="absolute w-[90%] h-[90%] rounded-full border border-fox/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      )}

      {/* Pulsing glow */}
      <motion.div
        className="absolute w-[75%] h-[75%] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.35) 0%, transparent 70%)",
        }}
        animate={
          reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Fox image */}
      <motion.div
        style={reduceMotion ? {} : { x: springX, y: springY }}
        animate={reduceMotion ? {} : { y: [0, -16, 0] }}
        transition={
          reduceMotion
            ? {}
            : { y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }
        }
        className="relative z-10 w-[280px] md:w-[400px] lg:w-[440px]"
      >
        <motion.img
          src="/fox-hero.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,106,0,0.35)]"
          loading="eager"
          animate={
            reduceMotion
              ? {}
              : {
                  filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                }
          }
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Tech badges */}
 {techBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute z-20 glass px-4 py-2 rounded-full text-xs font-semibold border border-fox/20 shadow-[0_0_20px_rgba(255,106,0,0.15)]"
          style={{ left: "50%", top: "50%" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1, x: badge.x, y: badge.y }
              : {
                  opacity: 1,
                  scale: 1,
                  x: badge.x,
                  y: [badge.y, `calc(${badge.y} - 10px)`, badge.y],
                }
          }
          transition={{
            opacity: { delay: 0.6 + badge.delay, duration: 0.5 },
            scale: { delay: 0.6 + badge.delay, type: "spring", stiffness: 200 },
            y: reduceMotion
              ? {}
              : {
                  duration: 2.5 + badge.delay * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
          }}
        >
          <span className="text-fox">{badge.label}</span>
        </motion.div>
      ))}
      
      {/* Orbiting particles */}
      {!reduceMotion &&
        Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background:
                i % 3 === 0 ? "rgba(255,106,0,0.6)" : "rgba(255,255,255,0.2)",
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos((i / 12) * Math.PI * 2) * 180, 0],
              y: [0, Math.sin((i / 12) * Math.PI * 2) * 180, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            aria-hidden="true"
          />
        ))}
    </div>
  );
}
