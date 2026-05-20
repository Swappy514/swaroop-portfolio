"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero", section: "hero" },
  { label: "About", href: "#about", section: "about" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Blog", href: "#blog", section: "blog" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section);
        },
        { threshold: 0.3, rootMargin: "-60px 0px 0px 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-inter)",
    fontSize: "clamp(14px, 4vw, 18px)",
    fontWeight: 500,
    color: "#ccc",
    textDecoration: "none",
    cursor: "none",
    transition: "color 0.2s",
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
      transition={{ duration: 0.6, delay: 0 }}
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
        whileHover={{ scale: 1.08 }}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(18px, 1.8vw, 24px)",
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
        {navLinks.map((link) => {
          const isActive = activeSection === link.section;
          const isHovered = hoveredLink === link.label;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(12px, 1vw, 14px)",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#fff" : "#aaa",
                textDecoration: "none",
                cursor: "none",
                position: "relative",
                transition: "color 0.2s",
                paddingBottom: "4px",
              }}
            >
              {link.label}

              {/* Gradient underline — active state (always visible) */}
              {isActive && !isHovered && (
                <motion.span
                  layoutId="activeUnderline"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(to right, #ff4500, #ffb700)",
                    borderRadius: "2px",
                  }}
                />
              )}

              {/* Gradient underline — hover (draws left to right) */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(to right, #ff4500, #ffb700)",
                  borderRadius: "2px",
                  transformOrigin: "left",
                  display: "block",
                }}
              />
            </motion.a>
          );
        })}

        {/* CV BUTTON */}
        <motion.a
          href="/projects/Swarup_Jadhav_Resume.pdf"
          target="_blank"
          whileHover={{
            opacity: 0.85,
            boxShadow: "0 4px 20px rgba(255,85,0,0.4)",
            y: -1,
          }}
          style={{
            padding: "9px 20px",
            background: "linear-gradient(135deg, #ff4500, #ff7700)",
            border: "none",
            color: "#000",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "4px",
            cursor: "none",
            textDecoration: "none",
            letterSpacing: "0.3px",
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
              const isActive = activeSection === link.section;
              return (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    ...linkStyle,
                    color: isActive ? "#ff9944" : "#ccc",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#ff5500",
                        marginLeft: "8px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="/Swarup_Jadhav_Resume.pdf"
              target="_blank"
              style={cvStyle}
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
