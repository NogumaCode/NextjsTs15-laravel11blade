"use client";

import { useState, useEffect } from "react";
import { AboutType } from "@/types/content";
import { API_BASE_URL } from "@/config/config";

const useFetchAbout = () => {
  const [aboutData, setAboutData] = useState<AboutType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/aboutpage`);
        if (!response.ok) {
          throw new Error("Failed to fetch about data");
        }
        const data: AboutType = await response.json();
        setAboutData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return { aboutData, loading, error };
};

export default useFetchAbout;
