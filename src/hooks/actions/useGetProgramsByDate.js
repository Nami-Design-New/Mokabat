import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetProgramsByDate(actionId) {
  const { lang } = useSelector((state) => state.language);
  const [searchParams] = useSearchParams();
  const currentDate =
    searchParams.get("date") || new Date().toISOString().split("T")[0];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["programs-by-date", lang, actionId, currentDate],

    queryFn: async () => {
      const res = await axiosInstance.get(
        `/programs?action_id=${actionId}&date=${currentDate}`
      );
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
