
import Post from '@/components/Post';
import { posts } from '@/lib/placeholder-data';

const page = () => {
  return (
    <>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
                <Post key={post.id} {...post}/>    
            ))}
            </ul>
        </>
  )
}

export default page