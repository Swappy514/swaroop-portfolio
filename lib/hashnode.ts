export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  views: number;
  reactionCount: number;
  coverImage: {
    url: string;
  } | null;
  tags: {
    name: string;
  }[];
  url: string;
}

const RSS_URL = "https://swaroopdev.hashnode.dev/rss.xml";

function getFallbackPosts(): HashnodePost[] {
  return [
    {
      id: "fallback-post-1",
      title: "Stop Watching API Tutorials — Do This Instead",
      brief:
        "Most developers spend months watching tutorials without building anything real. Here is a practical approach that actually accelerates your learning and gets you building faster.",
      slug: "stop-watching-api-tutorials-do-this-instead",
      publishedAt: "2025-01-01T00:00:00.000Z",
      readTimeInMinutes: 5,
      views: 0,
      reactionCount: 0,
      coverImage: {
        url: "https://cdn.hashnode.com/uploads/covers/6a0a90833104e2aff00f4437/b4e2fe93-4488-4910-9da8-1d4f914e9ee0.png",
      },
      tags: [{ name: "Developer Tips" }],
      url: "https://swaroopdev.hashnode.dev/stop-watching-api-tutorials-do-this-instead",
    },
  ];
}

function parseReadTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractCoverImage(content: string): string | null {
  const match = content.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("RSS fetch failed:", res.status);
      return getFallbackPosts();
    }

    const xml = await res.text();

    if (!xml.includes("<item>")) {
      console.error("RSS returned no items");
      return getFallbackPosts();
    }

    // Parse RSS items
    const items = xml.split("<item>").slice(1);

    const posts: HashnodePost[] = items.map((item, index) => {
      const getTag = (tag: string) => {
        const match = item.match(
          new RegExp(
            `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`,
          ),
        );
        return match ? (match[1] || match[2] || "").trim() : "";
      };

      const title = getTag("title");
      const link =
        getTag("link") || item.match(/<link>([^<]+)<\/link>/)?.[1] || "";
      const pubDate = getTag("pubDate");
      const description = getTag("description");
      const content = getTag("content:encoded") || description;

      // Extract slug from URL
      const slug = link.split("/").filter(Boolean).pop() || `post-${index}`;

      // Extract cover image from content
      const coverMatch = content.match(
        /src="(https:\/\/cdn\.hashnode\.com[^"]+)"/,
      );
      const coverUrl = coverMatch ? coverMatch[1] : null;

      // Extract categories/tags
      const tagMatches = [
        ...item.matchAll(/<category><!\[CDATA\[([^\]]+)\]\]><\/category>/g),
      ];
      const tags =
        tagMatches.length > 0
          ? tagMatches.map((m) => ({ name: m[1] }))
          : [{ name: "Development" }];

      // Clean description for brief
      const brief =
        description
          .replace(/<[^>]*>/g, "")
          .replace(/&[^;]+;/g, " ")
          .trim()
          .slice(0, 200) + "...";

      return {
        id: `post-${index}-${slug}`,
        title: title || "Untitled Post",
        brief: brief || "Read this article on Hashnode.",
        slug,
        publishedAt: pubDate
          ? new Date(pubDate).toISOString()
          : new Date().toISOString(),
        readTimeInMinutes: parseReadTime(content),
        views: 0,
        reactionCount: 0,
        coverImage: coverUrl ? { url: coverUrl } : null,
        tags,
        url: link || `https://swaroopdev.hashnode.dev/${slug}`,
      };
    });

    return posts.length > 0 ? posts : getFallbackPosts();
  } catch (err) {
    console.error("RSS fetch error:", err);
    return getFallbackPosts();
  }
}
