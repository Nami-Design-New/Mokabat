import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetApperance() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["apperance"],

    queryFn: async () => {
      const res = await axiosInstance.get("/appearances");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
