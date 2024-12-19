import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/config";
import { GatewayServiceType } from "@/types/content";

const useFetchGatewayServices = () => {
  const [gatewayService, setGatewayService] = useState<GatewayServiceType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGatewayService = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gateway_services`);
        if (!response.ok) {
          throw new Error("Failed to fetch gateway services data");
        }
        const data: GatewayServiceType = await response.json();
        setGatewayService(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGatewayService();
  }, []);

  return { gatewayService, loading, error };
};

export default useFetchGatewayServices;
