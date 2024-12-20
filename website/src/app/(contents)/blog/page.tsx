import Breadcrumb from "@/components/breadcrumb";
import BlogList from "@/components/blog/list";


const BlogPage = () => {
  return (
    <>
      <main className="content">
        <Breadcrumb link="Blog" img="/images/header.webp" title="Blog" />
        <BlogList />
      </main>
    </>
  );
};

export default BlogPage;
