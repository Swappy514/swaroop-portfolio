"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    slug: "building-rest-apis",
    title: "Building Scalable REST APIs With Node.js & Express",
    description:
      "A practical guide to structuring Express apps for production — middleware, error handling and MongoDB best practices.",
    date: "May 10, 2025",
    tag: "FULL-STACK",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, #1a0800, #2a1200)",
    emoji: "🔧",
  },
  {
    slug: "react-performance",
    title: "React Performance Patterns Every Dev Should Know",
    description:
      "useMemo, useCallback, lazy loading and code splitting — the patterns that actually matter in real production apps.",
    date: "Apr 18, 2025",
    tag: "REACT",
    readTime: "4 min read",
    gradient: "linear-gradient(135deg, #001020, #001a30)",
    emoji: "⚛",
  },
  {
    slug: "ai-tools-dev-speed",
    title: "How I Use AI Tools to 10x My Dev Speed",
    description:
      "Prompt engineering, Make.com workflows and automation — how I cut repetitive work by 70%.",
    date: "Mar 22, 2025",
    tag: "AI & AUTOMATION",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #0a0018, #160028)",
    emoji: "🤖",
  },
];

export default function Blog() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="blog"
      style={{
        background: "#080808",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
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
          06 / Thoughts & Writing
        </motion.div>

        {/* Title + View All */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(36px, 6vw, 74px)",
              fontWeight: 800,
              color: "#f0f0f0",
              lineHeight: 1,
            }}
          >
            Latest
            <br />
            Articles.
          </motion.h2>

          <motion.a
            href="/blog"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ff9944",
              textDecoration: "none",
              cursor: "none",
              border: "1px solid rgba(255,130,0,0.3)",
              padding: "8px 18px",
              borderRadius: "6px",
              transition: "all 0.2s",
            }}
          >
            View All Posts <FaArrowRight size={10} />
          </motion.a>
        </div>

        {/* Blog Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {posts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHovered(post.slug)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#161616",
                border:
                  hovered === post.slug
                    ? "1px solid rgba(255,130,0,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                overflow: "hidden",
                textDecoration: "none",
                cursor: "none",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s",
                transform:
                  hovered === post.slug ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hovered === post.slug
                    ? "0 20px 40px rgba(0,0,0,0.7)"
                    : "0 4px 16px rgba(0,0,0,0.3)",
                position: "relative",
              }}
            >
              {/* Top border on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  zIndex: 10,
                }}
              >
                <motion.div
                  animate={{ scaleX: hovered === post.slug ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, transparent, #ff4500, #ffb700, #ff4500, transparent)",
                    transformOrigin: "center",
                  }}
                />
              </div>

              {/* Card image area */}
              <div
                style={{
                  height: "140px",
                  background: post.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "52px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <motion.div
                  animate={{
                    scale: hovered === post.slug ? 1.2 : 1,
                    opacity: hovered === post.slug ? 0.9 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {post.emoji}
                </motion.div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background: "linear-gradient(to top, #161616, transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "20px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "8px",
                    fontWeight: 700,
                    color: "#ff9944",
                    background: "rgba(255,85,0,0.08)",
                    border: "1px solid rgba(255,130,0,0.2)",
                    padding: "3px 10px",
                    borderRadius: "3px",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                    width: "fit-content",
                  }}
                >
                  {post.tag}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: hovered === post.slug ? "#fff" : "#e0e0e0",
                    lineHeight: 1.35,
                    marginBottom: "10px",
                    transition: "color 0.3s",
                    flex: 1,
                  }}
                >
                  {post.title}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#555",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                  }}
                >
                  {post.description}
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    color: "#444",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    paddingTop: "12px",
                  }}
                >
                  <span>{post.date}</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: hovered === post.slug ? "#ff9944" : "#444",
                      transition: "color 0.3s",
                    }}
                  >
                    {post.readTime}
                    <motion.div
                      animate={{
                        x: hovered === post.slug ? 3 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight size={9} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
