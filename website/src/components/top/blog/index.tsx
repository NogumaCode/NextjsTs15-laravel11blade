import BlogItem from "./item";
import { BlogItemType } from "@/types/blog";

interface LatestBlogProps {
  data: BlogItemType[];
}

const LatestBlog = ({ data }: LatestBlogProps) => {
  return (
    <section className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10 pb-[100px]">
      <div className="container">
        <h3 className="heading3 text-center">Latest News</h3>
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
          {data &&
            data
              .slice(0, 3)
              .map((item, index) => <BlogItem data={item} key={index} />)}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
