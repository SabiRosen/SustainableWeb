import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./Layout";

// Lazy-loaded pages
const DefaultPage = lazy(() => import("./DefaultPage"));
const Services = lazy(() => import("./Services"));
const Cases = lazy(() => import("./Cases"));
const OmOs = lazy(() => import("./OmOs"));
const Kontakt = lazy(() => import("./Kontakt"));

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
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;