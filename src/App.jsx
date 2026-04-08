import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultPage from "./DefaultPage";
import Layout from "./Layout";
import Services from "./Services";
import Cases from "./Cases";
import OmOs from "./OmOs";
import Kontakt from "./Kontakt";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "cases",
        element: <Cases />
      },
      {
        path: "omos",
        element: <OmOs />
      },
      {
        path: "kontakt",
        element: <Kontakt />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;