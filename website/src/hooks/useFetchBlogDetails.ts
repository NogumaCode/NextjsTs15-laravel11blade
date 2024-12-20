import { useState, useEffect } from "react";
import { BlogPostType } from "@/types/content";

const useFetchBlogDetails = (slug: string, apiUrl: string) => {
  const [blogDetails, setBlogDetails] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchBlogDetails = async () => {
        try {
          const response = await fetch(`${apiUrl}/${slug}`);
          if (!response.ok) {
            throw new Error("Failed to fetch blog details");
          }
          const data: BlogPostType = await response.json();
          setBlogDetails(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };
      fetchBlogDetails();
    }
  }, [slug, apiUrl]);

  return { blogDetails, loading, error };
};

export default useFetchBlogDetails;
