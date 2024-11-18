import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";

export default function useGetSessions(id) {
  const { lang } = useSelector((state) => state.language);
  const [search] = useSearchParams();

  const type = search.get("type") || "what_you_missed";

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["sessions", lang, id, type],

    queryFn: async () => {
      const res = await axiosInstance.get(
        `/sessions?program_id=${id}&type=${type}`
      );
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
