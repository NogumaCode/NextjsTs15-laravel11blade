
import { BlogPostType } from "@/types/content";
import { useState, useEffect } from "react";


const useFetchBlogs = (apiUrl: string) => {
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: BlogPostType[] = await response.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  return { blogs, loading, error };
};

export default useFetchBlogs;
