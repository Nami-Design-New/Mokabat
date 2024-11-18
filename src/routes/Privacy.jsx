import useGetSettings from "../hooks/useGetSettings";

export default function Privacy() {
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };
  const { data: settings } = useGetSettings();
  return (
    <section className="terms">
      <div
        className="container"
        dangerouslySetInnerHTML={renderHTML(settings?.terms_and_conditions)}
      ></div>
    </section>
  );
}
