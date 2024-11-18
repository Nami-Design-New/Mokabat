import About from "./routes/About";
import ActionDetails from "./routes/ActionDetails";
import ActionPage from "./routes/ActionPage";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Insight from "./routes/Insight";
import Insights from "./routes/Insights";
import Join from "./routes/Join";
import Media from "./routes/Media";
import MediaDetails from "./routes/MediaDetails";
import Privacy from "./routes/Privacy";
import Projects from "./routes/Projects";
import Services from "./routes/Services";
import Terms from "./routes/Terms";

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
    path: "/insights/:id",
    element: <Insight />,
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
    path: "/terms-conditions",
    element: <Terms />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/join-mokabat",
    element: <Join />,
  },
  {
    path: "/actions/:id",
    element: <ActionPage />,
  },
  {
    path: "/actions/:id/:actionId",
    element: <ActionDetails />,
  },
];

export default router;
