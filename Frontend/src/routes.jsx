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
} from "./components";
import { Home, Login, JobSearch, Profile, Join , ForgotPassword } from "./pages";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap routes with Navbar/Footer
    children: [
      { path: "/", element: <Home /> },

      { path: "/JobSearch", element: <JobSearch /> },
      { path: "/Profile", element: <Profile /> },
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
