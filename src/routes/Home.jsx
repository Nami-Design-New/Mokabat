import AboutSection from "../components/home/AboutSection";
import Actions from "../components/home/Actions";
import HeroSection from "../components/home/HeroSection";
import LinkedInFeed from "../components/home/LinkedInFeed";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <Projects />
      <Testimonials />
      <Actions />
      <LinkedInFeed />
    </>
  );
}
