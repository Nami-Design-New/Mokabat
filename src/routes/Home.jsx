import AboutSection from "../components/home/AboutSection";
import Actions from "../components/home/Actions";
import HeroSection from "../components/home/HeroSection";
import LinkedInFeed from "../components/home/LinkedInFeed";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import useGetApperance from "../hooks/useGetApperance";

export default function Home() {
  const { data: appearance } = useGetApperance();
  return (
    <>
      {appearance?.banners === "on" && <HeroSection />}
      {appearance?.about_mokabat === "on" && <AboutSection />}
      {appearance?.services === "on" && <Services />}
      {appearance?.projects === "on" && <Projects />}
      {appearance?.feedbacks === "on" && <Testimonials />}
      {appearance?.action_home === "on" && <Actions />}
      {appearance?.linkedin_feed === "on" && <LinkedInFeed />}
    </>
  );
}
