"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Status = "idle" | "loading" | "success" | "error";

const socials = [
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Swappy514",
    color: "#fff",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swaroopjadhav514/",
    color: "#0077b5",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://instagram.com",
    color: "#e1306c",
  },
  {
    icon: <FaXTwitter size={18} />,
    label: "X / Twitter",
    href: "https://x.com",
    color: "#fff",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in name, email and message.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#f2ede4",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background text */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-10px",
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(80px, 15vw, 180px)",
          fontWeight: 900,
          color: "rgba(255,85,0,0.04)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          letterSpacing: "8px",
          userSelect: "none",
        }}
      >
        CONTACT
      </div>

      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
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
          07 / Get In Touch
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
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          Let's Build
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #ff4500, #ffb700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Together.
          </span>
        </motion.h2>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Open to
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #ff4500, #ffb700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Opportunities
              </span>
            </h3>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.85,
                marginBottom: "28px",
              }}
            >
              Full-time roles, freelance projects, collaborations or just a tech
              chat — I am always up for it. Drop a message and I will reply
              within 24 hours.
            </p>

            {/* Info items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,85,0,0.1)",
                    border: "1px solid rgba(255,85,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope size={14} color="#ff6600" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "9px",
                      color: "#aaa",
                      letterSpacing: "1px",
                      marginBottom: "2px",
                    }}
                  >
                    EMAIL
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#333",
                      fontWeight: 500,
                    }}
                  >
                    swaroop.jadhav@email.com
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,85,0,0.1)",
                    border: "1px solid rgba(255,85,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaMapMarkerAlt size={14} color="#ff6600" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "9px",
                      color: "#aaa",
                      letterSpacing: "1px",
                      marginBottom: "2px",
                    }}
                  >
                    LOCATION
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#333",
                      fontWeight: 500,
                    }}
                  >
                    Maharashtra, India · Open to Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                color: "#aaa",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Find me on
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  title={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "#fff",
                    border: "1px solid #e8e2d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    textDecoration: "none",
                    cursor: "none",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = "rgba(255,85,0,0.3)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(255,85,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#999";
                    e.currentTarget.style.borderColor = "#e8e2d8";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.06)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: "#fff",
              border: "1px solid #e8e2d8",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    textAlign: "center",
                    gap: "16px",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <FaCheckCircle size={52} color="#22c55e" />
                  </motion.div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                    }}
                  >
                    Message Sent!
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#888",
                      lineHeight: 1.7,
                    }}
                  >
                    Thanks for reaching out. I will get back to you within 24
                    hours.
                  </div>
                  <motion.button
                    onClick={() => setStatus("idle")}
                    whileHover={{ y: -1 }}
                    style={{
                      marginTop: "8px",
                      padding: "10px 24px",
                      background: "linear-gradient(135deg, #ff4500, #ff7700)",
                      border: "none",
                      color: "#000",
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      fontWeight: 700,
                      borderRadius: "6px",
                      cursor: "none",
                    }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Row 1 */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-inter)",
                          fontSize: "9px",
                          color: "#aaa",
                          letterSpacing: "2px",
                          marginBottom: "7px",
                          textTransform: "uppercase",
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        style={{
                          width: "100%",
                          background: "#faf8f5",
                          border: "1px solid #e8e2d8",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          color: "#1a1a1a",
                          fontSize: "13px",
                          fontFamily: "var(--font-inter)",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#ff6600")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e2d8")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-inter)",
                          fontSize: "9px",
                          color: "#aaa",
                          letterSpacing: "2px",
                          marginBottom: "7px",
                          textTransform: "uppercase",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={{
                          width: "100%",
                          background: "#faf8f5",
                          border: "1px solid #e8e2d8",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          color: "#1a1a1a",
                          fontSize: "13px",
                          fontFamily: "var(--font-inter)",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#ff6600")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e2d8")}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={{ marginBottom: "14px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-inter)",
                        fontSize: "9px",
                        color: "#aaa",
                        letterSpacing: "2px",
                        marginBottom: "7px",
                        textTransform: "uppercase",
                      }}
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job offer, project, collab..."
                      style={{
                        width: "100%",
                        background: "#faf8f5",
                        border: "1px solid #e8e2d8",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#1a1a1a",
                        fontSize: "13px",
                        fontFamily: "var(--font-inter)",
                        outline: "none",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#ff6600")}
                      onBlur={(e) => (e.target.style.borderColor = "#e8e2d8")}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "14px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-inter)",
                        fontSize: "9px",
                        color: "#aaa",
                        letterSpacing: "2px",
                        marginBottom: "7px",
                        textTransform: "uppercase",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      style={{
                        width: "100%",
                        background: "#faf8f5",
                        border: "1px solid #e8e2d8",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#1a1a1a",
                        fontSize: "13px",
                        fontFamily: "var(--font-inter)",
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#ff6600")}
                      onBlur={(e) => (e.target.style.borderColor = "#e8e2d8")}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        color: "#e53e3e",
                        marginBottom: "12px",
                        padding: "8px 12px",
                        background: "rgba(229,62,62,0.06)",
                        borderRadius: "6px",
                        border: "1px solid rgba(229,62,62,0.2)",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { y: -2 } : {}}
                    style={{
                      width: "100%",
                      padding: "13px",
                      background:
                        status === "loading"
                          ? "rgba(255,85,0,0.5)"
                          : "linear-gradient(135deg, #ff4500, #ff7700)",
                      border: "none",
                      color: "#000",
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      fontWeight: 700,
                      borderRadius: "8px",
                      cursor: status === "loading" ? "not-allowed" : "none",
                      letterSpacing: "1px",
                      transition: "all 0.3s",
                      boxShadow:
                        status !== "loading"
                          ? "0 4px 20px rgba(255,85,0,0.25)"
                          : "none",
                    }}
                  >
                    {status === "loading" ? "SENDING..." : "SEND MESSAGE ↗"}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #contact {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: 480px) {
          #contact > div > div:last-child > div:last-child > div > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
