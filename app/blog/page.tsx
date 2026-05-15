"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogNavbar from "@/components/BlogNavbar";
import CustomCursor from "@/components/CustomCursor";

const posts = [
  {
    slug: "building-rest-apis",
    title: "Building Scalable REST APIs With Node.js & Express",
    description:
      "A practical guide to structuring Express apps for production — middleware, error handling and MongoDB best practices.",
    date: "May 10, 2025",
    tag: "FULL-STACK",
    readTime: "5 min read",
    externalUrl: null,
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
    externalUrl: null,
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
    externalUrl: null,
    emoji: "🤖",
  },
];

export default function BlogPage() {
  return (
    <>
      <CustomCursor />
      <BlogNavbar showBack={false} />
      <main
        style={{
          background: "#080808",
          minHeight: "100vh",
          padding: "120px 48px 80px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            All Articles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              color: "#f0f0f0",
              marginBottom: "48px",
              lineHeight: 1,
            }}
          >
            Blog.
          </motion.h1>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {posts.map((post, i) => {
              const isExternal = !!post.externalUrl;
              const href = isExternal
                ? post.externalUrl!
                : `/blog/${post.slug}`;

              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={href}
                    target={isExternal ? "_blank" : "_self"}
                    style={{
                      background: "#161616",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px",
                      padding: "24px 28px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      transition: "all 0.3s",
                      cursor: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,130,0,0.3)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 32px rgba(0,0,0,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.07)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Emoji */}
                    <div style={{ fontSize: "32px", flexShrink: 0 }}>
                      {post.emoji}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "8px",
                          color: "#ff9944",
                          letterSpacing: "2px",
                          marginBottom: "6px",
                          fontWeight: 700,
                        }}
                      >
                        {post.tag} · {post.readTime} · {post.date}
                        {isExternal && (
                          <span
                            style={{
                              marginLeft: "8px",
                              color: "#555",
                              fontStyle: "italic",
                            }}
                          >
                            External ↗
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#f0f0f0",
                          marginBottom: "6px",
                          lineHeight: 1.3,
                        }}
                      >
                        {post.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "12px",
                          color: "#555",
                          lineHeight: 1.7,
                        }}
                      >
                        {post.description}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
