import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { connectToDatabase, getPosts } from "@/lib/data";
import Link from "next/link"



export default async function Page() {
  const client = await connectToDatabase();
  const posts = await getPosts();
  return (
    <>
      {client && <p className='text-green-500 my-2'>Connected to database!</p>}
      <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link>
      <h1>Posts</h1>
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </>)
}

