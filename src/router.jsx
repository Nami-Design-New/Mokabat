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
import ErrorPage from "./ui/layout/ErrorPage";

const router = [
  {
    path: "/",
    element: <Home />,
    checkKey: "home_page",
  },
  {
    path: "/about",
    element: <About />,
    checkKey: "about_us_page",
  },
  {
    path: "/services",
    element: <Services />,
    checkKey: "service_page",
  },
  {
    path: "/media",
    element: <Media />,
    checkKey: "media_page",
  },
  {
    path: "/media/:id",
    element: <MediaDetails />,
    checkKey: "media_page",
  },
  {
    path: "/insights",
    element: <Insights />,
    checkKey: "insights_page",
  },
  {
    path: "/insights/:id",
    element: <Insight />,
    checkKey: "insights_page",
  },
  {
    path: "/projects",
    element: <Projects />,
    checkKey: "projects_page",
  },
  {
    path: "/contact",
    element: <Contact />,
    checkKey: "contact_us_page",
  },
  {
    path: "/terms-conditions",
    element: <Terms />,
    checkKey: "terms_page",
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
    checkKey: "privacy_page",
  },
  {
    path: "/join-mokabat",
    element: <Join />,
    checkKey: "careers_page",
  },
  {
    path: "/actions/:id",
    element: <ActionPage />,
    checkKey: "actions_page",
  },
  {
    path: "/actions/:id/:actionId",
    element: <ActionDetails />,
    checkKey: "actions_page",
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default router;
