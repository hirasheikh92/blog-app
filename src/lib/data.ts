import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
export async function connectToDatabase() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("connected to database");
      return client;
    }
  } catch {
    console.log("could not connect to database");
  }
}

export async function getPosts() {
  try {
    const data = await sql`SELECT * FROM posts LIMIT 2`;
    console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error("Error getting posts", error);
  }
}
