import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";

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
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "8px",
            color: "#ff9944",
            letterSpacing: "3px",
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          {post.tag} · {post.readTime} · {post.date}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            color: "#f0f0f0",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          {post.title}
        </h1>
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
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "15px",
            color: "#aaa",
            lineHeight: 1.9,
            whiteSpace: "pre-wrap",
          }}
        >
          {post.content}
        </div>
      </div>
    </main>
  );
}
