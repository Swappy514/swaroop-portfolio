import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
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
        </div>
        <h1
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
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "24px 28px",
                textDecoration: "none",
                display: "block",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "8px",
                  color: "#ff9944",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                  fontWeight: 700,
                }}
              >
                {post.tag} · {post.readTime}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#f0f0f0",
                  marginBottom: "6px",
                }}
              >
                {post.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: 1.7,
                }}
              >
                {post.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
