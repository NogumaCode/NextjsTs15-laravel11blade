import { TestimonialType } from "@/types/content";
import { useState, useEffect } from "react";

const useFetchTestimonials = (url: string) => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data: TestimonialType[] = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [url]);

  return { testimonials, loading, error };
};

export default useFetchTestimonials;
