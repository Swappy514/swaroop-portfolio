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

const BLOG_HOST = "swaroopdev.hashnode.dev";

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

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  try {
    const query = `
      {
        publication(host: "${BLOG_HOST}") {
          posts(first: 20) {
            edges {
              node {
                id
                title
                brief
                slug
                publishedAt
                readTimeInMinutes
                views
                reactionCount
                coverImage {
                  url
                }
                tags {
                  name
                }
                url
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    const text = await res.text();

    if (text.startsWith("<")) {
      console.error("Hashnode returned HTML — API blocked or unreachable");
      return getFallbackPosts();
    }

    const data = JSON.parse(text);
    const edges = data?.data?.publication?.posts?.edges ?? [];
    return edges.map((e: { node: HashnodePost }) => e.node);
  } catch (err) {
    console.error("Hashnode API error:", err);
    return getFallbackPosts();
  }
}
