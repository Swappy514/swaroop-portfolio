"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/Swappy514",
    label: "GitHub",
    color: "#fff",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: "https://www.linkedin.com/in/swaroopjadhav514/",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://instagram.com",
    label: "Instagram",
    color: "#e1306c",
  },
  {
    icon: <FaXTwitter size={16} />,
    href: "https://x.com",
    label: "X",
    color: "#fff",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030303",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 48px 28px",
      }}
    >
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "40px",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Left — Brand */}
          <div style={{ maxWidth: "260px" }}>
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.03 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "22px",
                fontWeight: 800,
                textDecoration: "none",
                background: "linear-gradient(135deg, #ff4500, #ffb700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                marginBottom: "12px",
                cursor: "none",
              }}
            >
              Swaroop.dev
            </motion.a>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "#444",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Full-Stack Developer based in Maharashtra, India.
              Building fast, scalable and beautiful web experiences.
            </p>

            {/* Available badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "rgba(34,197,94,0.07)",
                border: "1px solid rgba(34,197,94,0.2)",
                padding: "6px 12px",
                borderRadius: "20px",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "10px",
                  color: "#22c55e",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Middle — Nav links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                color: "#444",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4, color: "#ff9944" }}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "#555",
                    textDecoration: "none",
                    cursor: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Contact + Socials */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                color: "#444",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Connect
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              
                href="mailto:swaroop.jadhav@email.com"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#555",
                  textDecoration: "none",
                  cursor: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff9944")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                swaroop.jadhav@email.com
              </a>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#444",
                }}
              >
                Maharashtra, India
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  title={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#555",
                    textDecoration: "none",
                    cursor: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = "rgba(255,85,0,0.3)";
                    e.currentTarget.style.background = "rgba(255,85,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#555";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart size={11} color="#ff4500" />
            </motion.span>
            and JavaScript · Swaroop Jadhav © 2025
          </div>

          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              color: "#333",
            }}
          >
            BTech CSE · Full-Stack Developer · Maharashtra
          </div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 640px) {
          footer {
            padding: 40px 20px 24px !important;
          }
          footer > div > div:first-child {
            flex-direction: column !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </footer>
  );
}