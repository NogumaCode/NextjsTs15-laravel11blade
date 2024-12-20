

import { useState, useEffect } from "react";
import { BlogListType, CategoryType } from "@/types/content";

const useFetchBlogData = (apiBaseUrl: string) => {
  const [blogs, setBlogs] = useState<BlogListType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);

        // ブログデータの取得
        const blogResponse = await fetch(`${apiBaseUrl}/allblog`);
        if (!blogResponse.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const blogData: BlogListType[] = await blogResponse.json();
        setBlogs(blogData);

        // カテゴリデータの取得
        const categoryResponse = await fetch(`${apiBaseUrl}/blogcat`);
        if (!categoryResponse.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categoryData: CategoryType[] = await categoryResponse.json();
        setCategories(categoryData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [apiBaseUrl]);

  return { blogs, categories, loading, error };
};

export default useFetchBlogData;
