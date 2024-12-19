
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/config";
import { ServiceType } from "@/types/content";

const useFetchServices = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services`);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data: ServiceType[] = await response.json();
        setServices(data);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchServices();
  }, []);

  return { services, error };
};

export default useFetchServices;
