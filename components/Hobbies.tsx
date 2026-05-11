"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const hobbies = [
  {
    icon: "🎬",
    title: "Video Editing",
    desc: "Creating cinematic edits, motion graphics and colour grading. Storytelling through cuts, transitions and visual rhythm.",
    tag: "Creative",
  },
  {
    icon: "🤖",
    title: "AI for Work",
    desc: "Prompt engineering, automation workflows and building AI-powered tools to supercharge productivity and eliminate repetitive work.",
    tag: "Tech",
  },
  {
    icon: "🔨",
    title: "Build & Create",
    desc: "Always working on side projects, experimenting with new stacks and turning raw ideas into working prototypes fast.",
    tag: "Builder",
  },
  {
    icon: "📚",
    title: "Always Learning",
    desc: "New framework? New cloud tool? New language? I'm on it. Growth mindset — every single day is a chance to level up.",
    tag: "Growth",
  },
  {
    icon: "🎯",
    title: "Problem Solving",
    desc: "Breaking down complex problems into elegant solutions. Systems thinking applied to every challenge I encounter.",
    tag: "Analytical",
  },
  {
    icon: "🌐",
    title: "Open Source",
    desc: "Exploring GitHub, contributing where I can and learning from real-world codebases written by great engineers.",
    tag: "Community",
  },
];

export default function Hobbies() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="hobbies"
      style={{
        background: "#f2ede4",
        padding: "60px 48px 100px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Divider from Skills section */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,100,0,0.2), transparent)",
            marginBottom: "60px",
          }}
        />

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "10px",
            background: "linear-gradient(135deg, #ff4500, #ffb700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "4px",
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          05 / Beyond Code
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(36px, 6vw, 74px)",
            fontWeight: 800,
            color: "#1a1a1a",
            lineHeight: 1,
            marginBottom: "48px",
          }}
        >
          Interests &<br />
          Hobbies.
        </motion.h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff",
                border:
                  hovered === i
                    ? "1px solid rgba(255,130,0,0.3)"
                    : "1px solid #e8e2d8",
                borderRadius: "14px",
                padding: "28px 24px",
                cursor: "none",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s",
                transform: hovered === i ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? "0 16px 40px rgba(0,0,0,0.1)"
                    : "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {/* Animated bottom bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  animate={{ scaleX: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #ff4500, #ffb700)",
                    transformOrigin: "left",
                  }}
                />
              </div>

              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "8px",
                  fontWeight: 700,
                  color: hovered === i ? "#ff6600" : "#ccc",
                  letterSpacing: "1px",
                  transition: "color 0.3s",
                  textTransform: "uppercase",
                }}
              >
                {h.tag}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: "28px",
                  marginBottom: "14px",
                  display: "block",
                  transition: "transform 0.3s",
                  transform: hovered === i ? "scale(1.15)" : "scale(1)",
                }}
              >
                {h.icon}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: hovered === i ? "#ff5500" : "#1a1a1a",
                  marginBottom: "8px",
                  transition: "color 0.3s",
                }}
              >
                {h.title}
              </div>

              {/* Description */}
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#888",
                  lineHeight: 1.8,
                }}
              >
                {h.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          #hobbies > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #hobbies > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #hobbies {
            padding: 40px 20px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
