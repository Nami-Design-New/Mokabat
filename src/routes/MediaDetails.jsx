import { useParams } from "react-router-dom";
import useGetMediaDetails from "../hooks/media/useGetMediaDetails";

export default function MediaDetails() {
  const { id } = useParams();
  const { data: details } = useGetMediaDetails(id);
  return (
    <section className="media_details">
      <div className="container d-flex flex-column gap-5">
        <div className="banner" data-aos="fade-up">
          <img src={details?.image} alt="blog-banner" />
        </div>

        <div className="blog">
          <h1 data-aos="fade-up">{details?.title}</h1>
          <span data-aos="fade-up">{details?.date}</span>
          <p className="mt-3" data-aos="fade-up">{details?.description}</p>
        </div>
      </div>
    </section>
  );
}
