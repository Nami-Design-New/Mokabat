import useGetSettings from "../hooks/useGetSettings";

export default function Terms() {
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };
  const { data: settings } = useGetSettings();
  return (
    <section className="terms">
      <div
        className="container"
        dangerouslySetInnerHTML={renderHTML(settings?.privacy_policy)}
      ></div>
    </section>
  );
}
