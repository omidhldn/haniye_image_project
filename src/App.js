import "./App.css";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import GalleryPage from "./pages/Gallery";
import RootLayout from "./pages/Root";

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:imageId", element: <DetailPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
