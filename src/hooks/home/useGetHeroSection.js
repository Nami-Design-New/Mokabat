import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux"; 
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHeroSection() {
  const { lang } = useSelector((state) => state.language);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["hero-section", lang],

    queryFn: async () => {
      const res = await axiosInstance.get("/banner");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
