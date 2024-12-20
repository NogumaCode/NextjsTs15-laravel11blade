
import { useState, useEffect } from "react";
import { SiteSettingType } from "@/types/content";
import { API_BASE_URL } from "@/config/config";

const useFetchSiteSettings = () => {
  const [siteSettings, setSiteSettings] = useState<SiteSettingType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sitesetting`);
        if (!response.ok) {
          throw new Error("Failed to fetch site settings");
        }
        const data: SiteSettingType = await response.json();
        setSiteSettings(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { siteSettings, loading, error };
};

export default useFetchSiteSettings;
