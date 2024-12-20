"use client";

import { useState, useEffect } from "react";
import { BlogListType, CategoryType } from "@/types/content";

const useFetchBlogData = (apiBaseUrl: string) => {
  const [blogs, setBlogs] = useState<BlogListType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 並列リクエストの最適化
        const [blogResponse, categoryResponse] = await Promise.all([
          fetch(`${apiBaseUrl}/allblog`),
          fetch(`${apiBaseUrl}/blogcat`),
        ]);

        if (!blogResponse.ok || !categoryResponse.ok) {
          throw new Error("Failed to fetch blog or category data");
        }

        const [blogData, categoryData]: [BlogListType[], CategoryType[]] =
          await Promise.all([blogResponse.json(), categoryResponse.json()]);

        setBlogs(blogData);
        setCategories(categoryData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiBaseUrl]);

  return { blogs, categories, loading, error };
};

export default useFetchBlogData;
