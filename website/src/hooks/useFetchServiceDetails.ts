import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/config";
import { ServiceDetailsType } from "@/types/content";

const useFetchServiceDetails = (slug: string) => {
  const [serviceDetails, setServiceDetails] = useState<ServiceDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchServiceDetails = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/service/${slug}`);
          if (!response.ok) {
            throw new Error("Failed to fetch service details");
          }
          const data: ServiceDetailsType = await response.json();
          setServiceDetails(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchServiceDetails();
    }
  }, [slug]);

  return { serviceDetails, loading, error };
};

export default useFetchServiceDetails;
