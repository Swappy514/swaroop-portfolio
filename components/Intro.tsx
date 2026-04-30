"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<"circle" | "name" | "exit">("circle");

  useEffect(() => {
    // Phase 1 — small circle appears (0s)
    // Phase 2 — circle expands, name fades in (1s)
    const t1 = setTimeout(() => setPhase("name"), 1000);
    // Phase 3 — everything exits (2.2s)
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    // Phase 4 — intro unmounts, page loads (3s)
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Circle */}
          <motion.div
            initial={{ width: "16px", height: "16px", opacity: 0 }}
            animate={{
              width: phase === "name" ? "80px" : "16px",
              height: phase === "name" ? "80px" : "16px",
              opacity: 1,
            }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
            style={{
              borderRadius: "50%",
              background: "#fff",
              boxShadow:
                phase === "name" ? "0 0 40px rgba(255,255,255,0.3)" : "none",
            }}
          />

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: phase === "name" ? 1 : 0,
              y: phase === "name" ? 0 : 10,
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(24px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "8px",
              color: "#fff",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            SWAROOP JADHAV
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "name" ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(10px, 1.2vw, 13px)",
              color: "#555",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </motion.div>

          {/* Bottom gradient line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: phase === "name" ? 1 : 0,
              opacity: phase === "name" ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #ff4500, #ffb700, transparent)",
              transformOrigin: "center",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
