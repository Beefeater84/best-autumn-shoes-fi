import type { IPost } from "../interfaces";

export async function listPosts(
  page: number = 1,
  limit: number = 20,
): Promise<IPost[]> {
  try {
    const offset = (1 - 1) * limit;
    const url = new URL(`${import.meta.env.VITE_DB_URL}/post`);
    url.searchParams.set("limit", limit.toString());
    url.searchParams.set("offset", offset.toString());
    url.searchParams.set("select", "*,author:authorId(id,name)");

    const response = await fetch(url.toString(), {
      headers: {
        apikey: import.meta.env.VITE_PUBLIC_API_KEY,
        Prefer: "count=exact",
      },
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json() as Promise<IPost[]>;
  } catch (error) {
    console.error("Error fetching post:", error);

    throw error;
  }
}
