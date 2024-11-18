import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetPrograms(actionId) {
  const { lang } = useSelector((state) => state.language);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["programs", lang, actionId],

    queryFn: async () => {
      const res = await axiosInstance.get(`/programs?action_id=${actionId}`);
      return res?.data?.data;
    },

    enabled: Boolean(actionId),
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
