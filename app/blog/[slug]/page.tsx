import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hashnodeUrl = `https://swaroopdev.hashnode.dev/${slug}`;

  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        padding: "120px 48px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ fontSize: "48px", marginBottom: "24px" }}>📝</div>
        <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "24px",
            fontWeight: 800,
            color: "#f0f0f0",
            marginBottom: "12px",
          }}
        >
          Opening on Hashnode
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          This article is hosted on Hashnode. Click below to read the full post.
        </p>

        <a
          href={hashnodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            background: "linear-gradient(135deg, #ff4500, #ff7700)",
            color: "#000",
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            fontWeight: 700,
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Read on Hashnode ↗
        </a>
        <div style={{ marginTop: "24px" }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#555",
              textDecoration: "none",
            }}
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
