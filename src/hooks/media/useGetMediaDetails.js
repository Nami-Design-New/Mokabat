import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetMediaDetails(id) {
  const { lang } = useSelector((state) => state.language);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["media-details", lang, id],

    queryFn: async () => {
      const res = await axiosInstance.get(`/media/${id}`);
      return res?.data?.data;
    },

    enabled: Boolean(id),
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
