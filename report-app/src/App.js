import { createBrowserRouter, RouterProvider } from "react-router-dom";

// project imports
import MisReport from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MisReport />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
