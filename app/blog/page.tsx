"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogNavbar from "@/components/BlogNavbar";
import CustomCursor from "@/components/CustomCursor";
import { FaHeart, FaEye, FaArrowRight } from "react-icons/fa";

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

const sortOptions = [
  { label: "New → Old", value: "new" },
  { label: "Old → New", value: "old" },
  { label: "Most Viewed", value: "views" },
  { label: "Most Liked", value: "likes" },
];

const fallbackEmojis = ["🔧", "⚛", "🤖", "🐍", "☁", "🗄"];

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("new");
  const [activeTag, setActiveTag] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hashnode")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Get all unique tags
  const allTags = [
    "All",
    ...Array.from(new Set(posts.flatMap((p) => p.tags.map((t) => t.name)))),
  ];

  // Filter by tag
  const filtered =
    activeTag === "All"
      ? posts
      : posts.filter((p) => p.tags.some((t) => t.name === activeTag));

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "new")
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    if (sort === "old")
      return (
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    if (sort === "views") return b.views - a.views;
    if (sort === "likes") return b.reactionCount - a.reactionCount;
    return 0;
  });

  const btnStyle = (active: boolean) => ({
    fontFamily: "var(--font-inter)",
    fontSize: "11px",
    padding: "6px 16px",
    border: active ? "none" : "1px solid rgba(255,255,255,0.1)",
    background: active
      ? "linear-gradient(135deg, #ff4500, #ffb700)"
      : "transparent",
    color: active ? "#000" : "#666",
    borderRadius: "20px",
    cursor: "none" as const,
    fontWeight: active ? 700 : 400,
    transition: "all 0.2s",
  });

  return (
    <>
      <CustomCursor />
      <BlogNavbar showBack={true} backLabel="Blog Section" backHref="/#blog" />
      <main
        style={{
          background: "#080808",
          minHeight: "100vh",
          padding: "120px 48px 80px",
        }}
      >
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          {/* Header */}
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
              marginBottom: "8px",
              lineHeight: 1,
            }}
          >
            Blog.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              color: "#555",
              marginBottom: "40px",
            }}
          >
            {loading
              ? "Loading..."
              : `${sorted.length} article${sorted.length !== 1 ? "s" : ""} published on Hashnode`}
          </motion.p>

          {/* Sort + Filter row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "36px",
              alignItems: "center",
            }}
          >
            {/* Sort */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#444",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  alignSelf: "center",
                  marginRight: "4px",
                }}
              >
                Sort:
              </span>
              {sortOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setSort(o.value)}
                  style={btnStyle(sort === o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {/* Tag filter */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  color: "#444",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  alignSelf: "center",
                  marginRight: "4px",
                }}
              >
                Tag:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={btnStyle(activeTag === tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Loading skeleton */}
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
                    borderRadius: "14px",
                    height: "320px",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
              ))}
            </div>
          )}

          {/* Posts grid */}
          {!loading && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {sorted.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={post.url}
                  target="_blank"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
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
                  {/* Top border */}
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

                  {/* Cover */}
                  <div
                    style={{
                      height: "150px",
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
                          fontSize: "42px",
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
                      padding: "16px 18px 20px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
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
                          marginBottom: "8px",
                          width: "fit-content",
                          letterSpacing: "1px",
                        }}
                      >
                        {post.tags[0].name.toUpperCase()}
                      </div>
                    )}

                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: hovered === post.slug ? "#fff" : "#e0e0e0",
                        lineHeight: 1.35,
                        marginBottom: "8px",
                        flex: 1,
                        transition: "color 0.3s",
                      }}
                    >
                      {post.title}
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        color: "#555",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.brief}
                    </div>

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
                      <div style={{ display: "flex", gap: "10px" }}>
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
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          transition: "color 0.3s",
                        }}
                      >
                        {post.readTimeInMinutes} min <FaArrowRight size={8} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {!loading && sorted.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "60px",
                fontFamily: "var(--font-inter)",
                color: "#444",
                fontSize: "14px",
              }}
            >
              No posts found for this tag.
            </div>
          )}
        </div>
      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @media (max-width: 900px) {
          main > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          main > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          main { padding: 100px 20px 60px !important; }
        }
      `}</style>
    </>
  );
}
