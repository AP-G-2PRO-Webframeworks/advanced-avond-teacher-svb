import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Paths extends ParsedUrlQuery {
    id: string
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
};

interface PostProps {
    post: Post;
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const paths = posts.map((post: any) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostProps, Paths> = async (context) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
    );
    const post = await response.json();

    return {
        props: {
            post: post,
        },
    };
};

const Post = ({ post }: PostProps) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;