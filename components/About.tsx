"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      {/* Dark Panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "280px",
          height: "70vh",
          minHeight: "480px",
          background: "#0d0d0d",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px 24px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,130,0,0.1)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "180px",
            height: "180px",
            background:
              "radial-gradient(circle, rgba(255,100,0,0.25), transparent 70%)",
            animation: "glowPulse 3s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Top — Avatar + Name */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Avatar circle */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff4500, #ffb700)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "14px",
              fontSize: "28px",
              fontWeight: 800,
              color: "#000",
              fontFamily: "var(--font-inter)",
              boxShadow: "0 0 24px rgba(255,85,0,0.35)",
            }}
          >
            SJ
          </div>

          {/* Name */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "1px",
              lineHeight: 1.1,
              marginBottom: "4px",
            }}
          >
            Swaroop
            <br />
            Jadhav
          </div>

          {/* Role */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #ff4500, #ffb700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Full-Stack Developer
          </div>

          {/* Badges row */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border: "1px solid rgba(255,130,0,0.35)",
                padding: "4px 10px",
                borderRadius: "4px",
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                fontWeight: 600,
                color: "#ff9944",
                background: "rgba(255,85,0,0.07)",
                letterSpacing: "1px",
              }}
            >
              ⚡ BTech CSE
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                border: "1px solid rgba(34,197,94,0.35)",
                padding: "4px 10px",
                borderRadius: "4px",
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                fontWeight: 600,
                color: "#22c55e",
                background: "rgba(34,197,94,0.07)",
              }}
            >
              ● Available
            </div>
          </div>
        </div>

        {/* Middle — Location + Info */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(255,85,0,0.3), transparent)",
              marginBottom: "16px",
            }}
          />

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "14px" }}>📍</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#e0e0e0",
                }}
              >
                Maharashtra, India
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#555",
                  letterSpacing: "1px",
                }}
              >
                LOCATION
              </div>
            </div>
          </div>

          {/* Graduate */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "14px" }}>🎓</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#e0e0e0",
                }}
              >
                2025 Graduate
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#555",
                  letterSpacing: "1px",
                }}
              >
                COMPUTER SCIENCE
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "14px" }}>💼</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#e0e0e0",
                }}
              >
                Open to Work
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#555",
                  letterSpacing: "1px",
                }}
              >
                FULL-TIME / FREELANCE
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(255,85,0,0.3), transparent)",
              marginTop: "16px",
            }}
          />
        </div>

        {/* Bottom — Social Links */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              color: "#444",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Connect With Me
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              {
                href: "https://github.com/Swappy514",
                icon: <FaGithub size={16} />,
                label: "GitHub",
                color: "#fff",
              },
              {
                href: "https://www.linkedin.com/in/swaroopjadhav514/",
                icon: <FaLinkedinIn size={16} />,
                label: "LinkedIn",
                color: "#0077b5",
              },
              {
                href: "https://instagram.com",
                icon: <FaInstagram size={16} />,
                label: "Instagram",
                color: "#e1306c",
              },
              {
                href: "https://x.com",
                icon: <FaXTwitter size={16} />,
                label: "X / Twitter",
                color: "#fff",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                title={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  textDecoration: "none",
                  cursor: "none",
                  transition: "all 0.2s",
                  flex: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,85,0,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,85,0,0.3)";
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(255,85,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#666";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
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
