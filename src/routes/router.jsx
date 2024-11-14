import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Page not found!</h1>,
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <h1>Login</h1>,
  },
]);

export default router;
