import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import BlogNavbar from "@/components/BlogNavbar";
import CustomCursor from "@/components/CustomCursor";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <CustomCursor />
      <BlogNavbar showBack={true} />
      <main
        style={{
          background: "#080808",
          minHeight: "100vh",
          padding: "120px 48px 80px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Tag + meta */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              color: "#ff9944",
              letterSpacing: "3px",
              marginBottom: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {post.tag} · {post.readTime} · {post.date}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(26px, 5vw, 46px)",
              fontWeight: 800,
              color: "#f0f0f0",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "48px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              paddingBottom: "32px",
            }}
          >
            {post.description}
          </p>

          {/* Content */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              color: "#aaa",
              lineHeight: 2,
              whiteSpace: "pre-wrap",
            }}
          >
            {post.content}
          </div>

          {/* Bottom nav */}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              href="/blog"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "#ff9944",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "none",
              }}
            >
              ← All Articles
            </a>
            <a
              href="/"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
                cursor: "none",
              }}
            >
              Back to Portfolio →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
