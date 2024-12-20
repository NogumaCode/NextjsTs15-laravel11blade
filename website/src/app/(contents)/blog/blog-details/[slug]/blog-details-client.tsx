
"use client";

import Breadcrumb from "@/components/breadcrumb";
import Loader from "@/components/loader";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";
import useFetchBlogDetails from "@/hooks/useFetchBlogDetails";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailsClientProps {
  slug: string;
}

const BlogDetailsClient = ({ slug }: BlogDetailsClientProps) => {
  const { blogDetails, loading, error } = useFetchBlogDetails(slug, `${API_BASE_URL}/allblog`);

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

  if (!blogDetails) {
    return <div className="text-center">No blog details found.</div>;
  }

  const formattedDate = new Date(blogDetails.created_at || "").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getTextFromHTML = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <main className="content">
      <Breadcrumb
        link="Blog Details"
        img="/images/header.webp"
        title="Blog Details"
        desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
      />
      <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
        <div className="container">
          <div className="flex max-xl:flex-col gap-y-8">
            <div className="w-full xl:w-3/4">
              <div className="w-full xl:pr-[80px]">
                <div className="heading3">{blogDetails.post_title}</div>
                <div className="bg-img mt-5 mb-5">
                  <Image
                    width={800}
                    height={400}
                    className="w-full h-full rounded-xl object-cover"
                    src={`${IMAGE_BASE_URL}/${blogDetails.image}`}
                    alt={blogDetails.post_title}
                  />
                </div>
                <div className="date flex items-center gap-4 mt-2">
                  <div className="author caption2 text-secondary">
                    by <span className="text-on-surface">Admin</span>
                  </div>
                  <div className="item-date flex items-center">
                    <CalendarBlank weight="bold" />
                    <span className="ml-1 caption2">{formattedDate}</span>
                  </div>
                  <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-blue-100">
                    {blogDetails.category_name}
                  </div>
                </div>
                <div className="body2 text-secondary mt-4">
                  {getTextFromHTML(blogDetails.long_descp || "")}
                </div>
              </div>
            </div>
            {/* サイドバー */}
            <div className="w-full xl:w-1/4">
              <div className="more-infor border border-line rounded-xl py-8 px-8">
                <div className="heading6">Categories</div>
                <div className="list-nav mt-4">
                  <Link className="nav-item rounded-lg flex-between p-6" href="/">
                    <div className="text-button text-secondary">Payment Solution</div>
                  </Link>
                  <Link className="nav-item rounded-lg flex-between p-6" href="/">
                    <div className="text-button text-secondary">Personal Finance</div>
                  </Link>
                </div>
              </div>
              <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                <div className="bg-img">
                  <Image
                    width={400}
                    height={300}
                    src="/images/ads.webp"
                    alt="Advertisement"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetailsClient;
