export async function getPost(postId: string): Promise<any> {
  try {
    const url = new URL(`${import.meta.env.VITE_DB_URL}/post`);
    url.searchParams.set("id", `eq.${postId}`);
    url.searchParams.set("limit", "1");

    const response = await fetch(url.toString(), {
      headers: {
        apikey: import.meta.env.VITE_PUBLIC_API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json().then((data) => data[0]);
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}
