import { createBrowserRouter } from "react-router-dom";
import React from "react";
import {
  HeroSection,
  ServicesSection,
  AIJobMatchSection,
  VisaRecommendatioSection,
  ProfileManagementSection,
  BlogSection,
  GlobalOpportuinities,
  Browse,
} from "./components";
import { Home, Login, JobSearch, Profile, Join , ForgotPassword , JobDescription } from "./pages";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap routes with Navbar/Footer
    children: [
      { path: "/", element: <Home /> },

      { path: "/JobSearch", element: <JobSearch /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/browse", element: <Browse /> },
      {
        path: "/description/:id", element: <JobDescription />
      },
    ],
  },
  {
    path: "/join",
    element: <Join />,
  },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password" , element: <ForgotPassword /> },

  
]);
export default router;
