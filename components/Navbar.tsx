"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-inter)",
    fontSize: "16px",
    fontWeight: 500,
    color: "#ccc",
    textDecoration: "none",
    cursor: "none",
  };

  const cvStyle = {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #ff4500, #ff7700)",
    color: "#000",
    fontWeight: 700,
    fontSize: "12px",
    borderRadius: "4px",
    textDecoration: "none",
    textAlign: "center" as const,
    cursor: "none",
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 3.2 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 200,
        padding: "16px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(8,8,8,0.96)" : "rgba(8,8,8,0.5)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,130,0,0.15)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* LOGO */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "20px",
          fontWeight: 700,
          textDecoration: "none",
          background: "linear-gradient(135deg, #ff4500, #ffb700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "none",
        }}
      >
        Swaroop.dev
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 8px #22c55e",
            display: "inline-block",
          }}
        />
      </motion.a>
      {/* DESKTOP LINKS */}
      <div
        className="nav-desktop"
        style={{ display: "flex", gap: "32px", alignItems: "center" }}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{ color: "#ffffff" }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#aaa",
              textDecoration: "none",
              cursor: "none",
              position: "relative",
              transition: "color 0.2s",
            }}
          >
            {link.label}
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                bottom: "-3px",
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(to right, #ff4500, #ffb700)",
                transformOrigin: "left",
                display: "block",
              }}
            />
          </motion.a>
        ))}
        <motion.a
          href="/swaroop-cv.pdf"
          target="_blank"
          whileHover={{ opacity: 0.85, y: -1 }}
          style={{
            padding: "9px 20px",
            background: "linear-gradient(135deg, #ff4500, #ff7700)",
            color: "#000",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "4px",
            cursor: "none",
            textDecoration: "none",
          }}
        >
          Download CV
        </motion.a>
      </div>
      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-btn"
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          cursor: "none",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{
              rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
              y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0,
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "linear-gradient(to right, #ff4500, #ffb700)",
              borderRadius: "2px",
            }}
          />
        ))}
      </button>
      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(8,8,8,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,130,0,0.15)",
              padding: "24px 48px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {navLinks.map((link) => {
              const href = link.href;
              const label = link.label;
              return (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={linkStyle}
                >
                  {label}
                </motion.a>
              );
            })}
            <motion.a href="/swaroop-cv.pdf" target="_blank" style={cvStyle}>
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
