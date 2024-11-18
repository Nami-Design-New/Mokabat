import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetTeam() {
  const { lang } = useSelector((state) => state.language);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["team", lang],

    queryFn: async () => {
      const res = await axiosInstance.get("/teams");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
