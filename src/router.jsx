import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Insights from "./routes/Insights";
import Join from "./routes/Join";
import Media from "./routes/Media";
import MediaDetails from "./routes/MediaDetails";
import Projects from "./routes/Projects";
import Services from "./routes/Services";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/media/:id",
    element: <MediaDetails />,
  },
  {
    path: "/insights",
    element: <Insights />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/join-mokabat",
    element: <Join />,
  },
];

export default router;
