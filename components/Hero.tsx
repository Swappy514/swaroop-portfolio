"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const orbitIcons = [
  { icon: "⚛", label: "React" },
  { icon: "🟢", label: "Node.js" },
  { icon: "🍃", label: "MongoDB" },
  { icon: "☁", label: "AWS" },
  { icon: "🐍", label: "Python" },
  { icon: "🗄", label: "SQL" },
  { icon: "🐙", label: "Git" },
  { icon: "🚂", label: "Express" },
];

const techNames = ["React", "Node.js", "MongoDB", "Express", "AWS", "Python"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,100,0,0.3)";
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,100,0,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Orbit animation
  useEffect(() => {
    const container = iconsRef.current;
    if (!container) return;

    const icons = container.querySelectorAll<HTMLDivElement>(".orbit-icon");
    const R = 265;
    let angle = 0;
    let animId: number;

    const animate = () => {
      angle += 0.004;
      icons.forEach((icon, i) => {
        const a = (i / icons.length) * Math.PI * 2 + angle;
        icon.style.left = Math.cos(a) * R - 21 + "px";
        icon.style.top = Math.sin(a) * R - 21 + "px";
      });
      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      {/* Orange beam */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: "50%",
          height: "65%",
          background:
            "linear-gradient(225deg, rgba(255,85,0,0.13) 0%, transparent 60%)",
          pointerEvents: "none",
          animation: "beamPulse 4s ease-in-out infinite",
        }}
      />

      {/* Orbit system */}
      <div
        style={{
          position: "relative",
          width: "680px",
          height: "680px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Orbit rings */}
        {[480, 580].map((size, i) => (
          <div
            key={size}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: `1px solid rgba(255,130,0,${i === 0 ? 0.08 : 0.04})`,
              transform: "translate(-50%, -50%)",
              animation: `spinRing ${i === 0 ? 22 : 35}s linear infinite ${i === 1 ? "reverse" : ""}`,
            }}
          />
        ))}

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            width: "400px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "2px",
              marginBottom: "14px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(48px, 7vw, 84px)",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Swaroop
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(48px, 7vw, 84px)",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Jadhav
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(24px, 3.5vw, 42px)",
                background: "linear-gradient(135deg, #ff4500, #ffb700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginTop: "8px",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Full-Stack Dev
            </span>
          </h1>

          {/* Tech name pills */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            {techNames.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#555",
                  padding: "3px 8px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                boxShadow: "0 0 24px rgba(255,85,0,0.45)",
                y: -2,
              }}
              style={{
                padding: "11px 24px",
                background: "linear-gradient(135deg, #ff4500, #ff7700)",
                color: "#000",
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "none",
              }}
            >
              View My Work ↓
            </motion.a>
            <motion.a
              href="/swaroop-cv.pdf"
              target="_blank"
              whileHover={{ y: -2 }}
              style={{
                padding: "11px 24px",
                background: "transparent",
                color: "#ffb700",
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "none",
                border: "1px solid rgba(255,183,0,0.4)",
              }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Orbiting icons */}
        <div
          ref={iconsRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            zIndex: 20,
          }}
        >
          {orbitIcons.map((item) => (
            <div
              key={item.label}
              className="orbit-icon"
              style={{
                position: "absolute",
                width: "42px",
                height: "42px",
                background: "#131313",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "17px",
                cursor: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,85,0,0.1)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 1.5px #ff7700, 0 0 18px rgba(255,85,0,0.25)";
                e.currentTarget.style.border = "1px solid transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#131313";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
              }}
              title={item.label}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Currently building ticker */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-inter)",
          fontSize: "11px",
          color: "#444",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 6px #22c55e",
            display: "inline-block",
            animation: "dotPulse 2s ease-in-out infinite",
          }}
        />
        Currently building — AI-powered web tools
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          opacity: 0.35,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, #ff5500, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#ff5500",
            animation: "scrollDot 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
