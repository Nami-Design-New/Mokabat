import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetVacancies() {
  const { lang } = useSelector((state) => state.language);
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const department = searchParams.get("department");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["jobs", lang, title, department],

    queryFn: async () => {
      const res = await axiosInstance.get("/vacancies", {
        params: {
          title: title,
          department_id: department,
        },
      });
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
