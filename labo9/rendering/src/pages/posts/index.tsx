import { GetStaticProps } from "next";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
};

interface PostsProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts
    }
  }
}

function Posts({ posts }: {posts : Post[]}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;