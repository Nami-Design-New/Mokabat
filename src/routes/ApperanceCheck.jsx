import useGetApperance from "../hooks/useGetApperance";
import ErrorPage from "../ui/layout/ErrorPage";

export default function ApperanceCheck({ children, checkKey }) {
  const { data: appearance } = useGetApperance();
  return checkKey === "home_page" ? (
    <>{children}</>
  ) : appearance?.[checkKey] !== "off" ? (
    <>{children}</>
  ) : (
    <ErrorPage />
  );
}
