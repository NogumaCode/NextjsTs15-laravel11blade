
"use client";

import BlogItem from "./item";
import useFetchBlogs from "@/hooks/useFetchBlogs";
import { API_BASE_URL } from "@/config/config";
import Loader from "@/components/loader";

const LatestBlog = () => {
  const { blogs, loading, error } = useFetchBlogs(`${API_BASE_URL}/allblog`);

  if (loading) {
    return (
       <div className="flex justify-center items-center h-[500px]">
       <Loader />
     </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10 pb-[100px]">
      <div className="container">
        <h3 className="heading3 text-center">Latest News</h3>
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
          {blogs.slice(0, 4).map((blog) => (
            <BlogItem data={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
