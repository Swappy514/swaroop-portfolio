"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaEye } from "react-icons/fa";
import Image from "next/image";

interface Post {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  views: number;
  reactionCount: number;
  coverImage: { url: string } | null;
  tags: { name: string }[];
  url: string;
}

const fallbackEmojis = ["🔧", "⚛", "🤖", "🐍", "☁", "🗄"];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hashnode")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="blog" style={{ background: "#080808", padding: "100px 48px" }}>
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
            }}
          >
            View All Posts <FaArrowRight size={10} />
          </motion.a>
        </div>

        {/* Loading state */}
        {loading && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  height: "300px",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            ))}
          </div>
        )}

        {/* Blog Cards */}
        {!loading && (
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
                href={post.url}
                target="_blank"
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
                    hovered === post.slug
                      ? "translateY(-5px)"
                      : "translateY(0)",
                  boxShadow:
                    hovered === post.slug
                      ? "0 20px 40px rgba(0,0,0,0.7)"
                      : "none",
                  position: "relative",
                }}
              >
                {/* Top border animation */}
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
                    transition={{ duration: 0.4 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, transparent, #ff4500, #ffb700, #ff4500, transparent)",
                      transformOrigin: "center",
                    }}
                  />
                </div>

                {/* Cover image or emoji */}
                <div
                  style={{
                    height: "160px",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #1a0800, #111)",
                    flexShrink: 0,
                  }}
                >
                  {post.coverImage?.url ? (
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      style={{
                        objectFit: "cover",
                        opacity: hovered === post.slug ? 0.85 : 0.65,
                        transition: "opacity 0.4s, transform 0.5s",
                        transform:
                          hovered === post.slug ? "scale(1.05)" : "scale(1)",
                      }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "48px",
                        opacity: 0.4,
                      }}
                    >
                      {fallbackEmojis[i % fallbackEmojis.length]}
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background:
                        "linear-gradient(to top, #161616, transparent)",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "18px 20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "8px",
                        fontWeight: 700,
                        color: "#ff9944",
                        background: "rgba(255,85,0,0.08)",
                        border: "1px solid rgba(255,130,0,0.2)",
                        padding: "2px 8px",
                        borderRadius: "3px",
                        display: "inline-block",
                        marginBottom: "10px",
                        width: "fit-content",
                        letterSpacing: "1px",
                      }}
                    >
                      {post.tags[0].name.toUpperCase()}
                    </div>
                  )}

                  {/* Title */}
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: hovered === post.slug ? "#fff" : "#e0e0e0",
                      lineHeight: 1.35,
                      marginBottom: "10px",
                      flex: 1,
                      transition: "color 0.3s",
                    }}
                  >
                    {post.title}
                  </div>

                  {/* Brief */}
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      color: "#555",
                      lineHeight: 1.75,
                      marginBottom: "14px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.brief}
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      paddingTop: "10px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "10px",
                      color: "#444",
                    }}
                  >
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <FaEye size={9} /> {post.views}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <FaHeart size={9} /> {post.reactionCount}
                      </span>
                    </div>
                    <span
                      style={{
                        color: hovered === post.slug ? "#ff9944" : "#444",
                        transition: "color 0.3s",
                      }}
                    >
                      {post.readTimeInMinutes} min read →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @media (max-width: 900px) {
          #blog > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          #blog > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #blog { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}
