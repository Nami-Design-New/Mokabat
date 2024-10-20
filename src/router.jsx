import About from "./routes/About";
import Home from "./routes/Home";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default router;
