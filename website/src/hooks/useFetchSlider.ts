import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/config";
import { SliderType } from "@/types/content";

const useFetchSliders = () => {
  const [sliders, setSliders] = useState<SliderType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sliders`);
        if (!response.ok) {
          throw new Error("Failed to fetch sliders");
        }
        const data: SliderType[] = await response.json();
        setSliders(data);
      } catch (err) {
        setError(err as Error);
      } finally {

      }
    };
    fetchSliders();
  }, []);

  return { sliders, error };
};

export default useFetchSliders;
