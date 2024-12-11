import Breadcrumb from "@/components/breadcrumb";
import BlogList from "@/components/blog/list";
import blogData from "@/data/blog.json";

const BlogPage = () => {
  return (
    <>
      <main className="content">
        <Breadcrumb link="Blog" img="/images/header.webp" title="Blog" />
        <BlogList data={blogData} />
      </main>
    </>
  );
};

export default BlogPage;
