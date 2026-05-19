export interface HashnodePost {
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

const HASHNODE_GQL = "https://gql.hashnode.com";
const BLOG_HOST = "swaroopdev.hashnode.dev";

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  try {
    const res = await fetch(HASHNODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          {
            publication(host: "${BLOG_HOST}") {
              posts(first: 20) {
                edges {
                  node {
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
        `,
      }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const edges = data?.data?.publication?.posts?.edges ?? [];
    return edges.map((e: { node: HashnodePost }) => e.node);
  } catch (err) {
    console.error("Hashnode API error:", err);
    return [];
  }
}
