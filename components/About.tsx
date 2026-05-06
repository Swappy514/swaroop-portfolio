"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 12, suffix: "+", label: "PROJECTS" },
  { number: 18, suffix: "+", label: "TECHNOLOGIES" },
  { number: 2025, suffix: "", label: "GRADUATE" },
];

const pills = [
  { label: "React", hot: true },
  { label: "Node.js", hot: true },
  { label: "Full-Stack", hot: true },
  { label: "AWS", hot: false },
  { label: "Python", hot: false },
  { label: "MongoDB", hot: false },
  { label: "Automation", hot: false },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#f2ede4",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
        padding: "60px 56px",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      {/* Dark Panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "280px",
          height: "70vh",
          minHeight: "420px",
          background: "#0d0d0d",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px 28px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,130,0,0.08)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "160px",
            height: "160px",
            background:
              "radial-gradient(circle, rgba(255,100,0,0.3), transparent 70%)",
            animation: "glowPulse 3s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Initials */}
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "64px",
            fontWeight: 800,
            background: "linear-gradient(135deg, #ff4500, #ffb700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "4px",
            lineHeight: 1,
            position: "relative",
            zIndex: 2,
          }}
        >
          SJ
        </div>

        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            color: "#555",
            letterSpacing: "3px",
            marginBottom: "20px",
            position: "relative",
            zIndex: 2,
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid rgba(255,130,0,0.3)",
            padding: "5px 10px",
            borderRadius: "4px",
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            color: "#ff9944",
            background: "rgba(255,85,0,0.06)",
            position: "relative",
            zIndex: 2,
            marginBottom: "10px",
            width: "fit-content",
          }}
        >
          ⚡ BTech CSE
        </div>

        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            color: "#444",
            position: "relative",
            zIndex: 2,
          }}
        >
          2025 Graduate · CSE
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "28px",
            right: "28px",
            zIndex: 2,
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            color: "#333",
            lineHeight: 1.9,
          }}
        >
          Mumbai, India
          <br />
          Open to Opportunities
        </div>
      </motion.div>

      {/* Light Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          flex: 1,
          maxWidth: "520px",
          minWidth: "280px",
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "10px",
            background: "linear-gradient(135deg, #ff4500, #ffb700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "3px",
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          02 / About Me
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            color: "#1a1a1a",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          Building{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff4500, #ffb700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real
          </span>
          <br />
          Solutions.
        </h2>

        {/* Paragraphs */}
        <p
          style={{
            fontSize: "clamp(13px, 1.2vw, 15px)",
            color: "#555",
            lineHeight: 1.85,
            marginBottom: "16px",
            fontFamily: "var(--font-inter)",
          }}
        >
          BTech CSE 2025 graduate passionate about building full-stack web
          applications that solve real problems. I love the intersection of
          clean UI and powerful backend logic — from pixel-perfect interfaces to
          scalable APIs and cloud deployments.
        </p>

        <p
          style={{
            fontSize: "clamp(12px, 1vw, 14px)",
            color: "#999",
            lineHeight: 1.85,
            marginBottom: "24px",
            fontFamily: "var(--font-inter)",
          }}
        >
          Always learning. Always building. Currently deep into AI-powered
          products, AWS architecture and automation workflows.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#fff",
                border: "1px solid #e8e2d8",
                borderRadius: "10px",
                padding: "14px",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #ff4500, #ffb700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "8px",
                  color: "#999",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
          {pills.map((pill) => (
            <span
              key={pill.label}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                background: pill.hot
                  ? "linear-gradient(135deg, #ff4500, #ff7700)"
                  : "#fff",
                color: pill.hot ? "#fff" : "#555",
                border: pill.hot ? "none" : "1px solid #ddd",
                padding: "4px 11px",
                borderRadius: "20px",
              }}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
