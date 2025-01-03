// src/hooks/useFetchFooterData.ts
import { useState, useEffect } from "react";
import { FooterType } from "@/types/content";
import { API_BASE_URL } from "@/config/config";

const useFetchFooterData = () => {
  const [footerData, setFooterData] = useState<FooterType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sitesetting`);
        if (!response.ok) {
          throw new Error("Failed to fetch footer data");
        }
        const data: FooterType = await response.json();
        setFooterData(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchFooterData();
  }, []);

  return { footerData,  error };
};

export default useFetchFooterData;
