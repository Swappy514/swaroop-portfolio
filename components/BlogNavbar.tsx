"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogNavbar({
  showBack = true,
}: {
  showBack?: boolean;
}) {
  const router = useRouter();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 200,
        padding: "16px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(8,8,8,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,130,0,0.1)",
      }}
    >
      {/* Logo */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(16px, 1.8vw, 20px)",
          fontWeight: 700,
          textDecoration: "none",
          background: "linear-gradient(135deg, #ff4500, #ffb700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          cursor: "none",
        }}
      >
        Swaroop.dev
      </motion.a>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Home link */}
        <motion.a
          href="/"
          whileHover={{ y: -1 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            fontWeight: 500,
            color: "#888",
            textDecoration: "none",
            cursor: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          Home
        </motion.a>

        {/* Back button */}
        {showBack && (
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ff9944",
              background: "rgba(255,85,0,0.08)",
              border: "1px solid rgba(255,130,0,0.25)",
              padding: "7px 16px",
              borderRadius: "6px",
              cursor: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,85,0,0.15)";
              e.currentTarget.style.borderColor = "rgba(255,130,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,85,0,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,130,0,0.25)";
            }}
          >
            <FaArrowLeft size={11} />
            Back
          </motion.button>
        )}
      </div>
    </nav>
  );
}
