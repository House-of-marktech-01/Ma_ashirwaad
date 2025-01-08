// pages/blog/[id].js
import { useRouter } from "next/router";
import { BlogPost } from "../../components/BlogPost";

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find((b) => b.id === Number(id));

  return <BlogPost blog={blog} />;
};

export default BlogPostPage;
