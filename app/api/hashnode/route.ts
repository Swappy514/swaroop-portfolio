import { NextResponse } from "next/server";
import { getHashnodePosts } from "@/lib/hashnode";

export async function GET() {
  const posts = await getHashnodePosts();
  return NextResponse.json(posts);
}
