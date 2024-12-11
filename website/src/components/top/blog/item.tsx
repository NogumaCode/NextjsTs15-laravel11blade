
import type { BlogItemType } from "@/types/blog";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  data: BlogItemType;
}

const BlogItem = ({ data }: BlogItemProps) => {
  return (
    <div className="blog-item">
      <Link
        className="blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500"
        href={`/blog/${data.id}`}
      >
        <div className="bg-img w-full overflow-hidden">
          <Image
            width={5000}
            height={5000}
            layout="responsive"
            className="w-full h-full block"
            src={data.img}
            alt={data.title}
          />
        </div>

        <div className="infor sm:p-6 p-4">
          <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-blue-100">
            {data.category}
          </div>
          <div className="heading6 mt-2">{data.title}</div>

          <div className="date flex items-center gap-4 mt-2">
            <div className="author caption2 text-secondary">
              by <span className="text-on-surface">{data.author}</span>
            </div>
            <div className="item-date flex items-center">
              <CalendarBlank weight="bold" />
              <span className="ml-1 caption2">{data.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;