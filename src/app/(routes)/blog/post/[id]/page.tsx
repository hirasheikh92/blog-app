import Post from "@/components/Post";

import { posts } from "@/lib/placeholder-data";


type Params = Promise<{ id :string }>
export default async function Page({params}: {params:Params}) {

  const {id} = await params;
  console.log("id",id)
  //   const {id} = await params;

  const post = posts.find((post) => post.id === id);

  return (
    <>
      <h1>Post</h1>

      {post && <Post {...post} />}
    </>
  );
}
