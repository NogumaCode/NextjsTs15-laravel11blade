import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/config";
import { GatewayType } from "@/types/content";

const useFetchGateway = () => {
  const [gateway, setGateway] = useState<GatewayType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGateway = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gateways`);
        if (!response.ok) {
          throw new Error("Failed to fetch gateway data");
        }
        const data: GatewayType = await response.json();
        setGateway(data);
        
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGateway();
  }, []);

  return { gateway, loading, error };
};

export default useFetchGateway;
