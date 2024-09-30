import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Contact, ErrorPage, GalleryDetails, Home, Media, NewsDetails, NotFound, PoliceStation, PoliceStationDetails, PoliceStationList, PoliceStations, Progress, Projects, Spaces, Teams } from "./pages";
import { Suspense } from "react";
import { Loader } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "our-projects/national-theatre",
          element: <Projects />,
        },
        {
          path: "our-projects/police-station",
          element: <PoliceStation />,
        },
        {
          path: "our-projects/police-stations",
          element: <PoliceStations />,
        },
        {
          path: "police-station/list",
          element: <PoliceStationList />,
        },
        {
          path: "police-station/list/:id",
          element: <PoliceStationDetails />,
        },
        {
          path: "spaces",
          element: <Spaces />,
        },
        {
          path: "spaces/:id",
          element: <Progress />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
        {
          path: "media",
          element: <Media />,
        },
        {
          path: "media/news/:title",
          element: <NewsDetails />,
        },
        {
          path: "media/gallery/:title",
          element: <GalleryDetails />,
        },
        {
          path: "contact-us",
          element: <Contact />,
        },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App
