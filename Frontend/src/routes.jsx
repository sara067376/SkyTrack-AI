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
import { Home, Login, JobSearch, Profile, Join , ForgotPassword , JobDescription , Companies , AdminJobs , PostJob , Applicants} from "./pages";
import { MainLayout } from "./layouts";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from './components/admin/CompanySetup'
import AIVisaAssist from "./pages/AIVisaAssist";
import AIJobAssist from "./pages/AIJobAssist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap routes with Navbar/Footer
    children: [
      { path: "/", element: <Home /> },

      { path: "/JobSearch", element: <JobSearch /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/browse", element: <Browse /> },
      { path: "/AIVisaAssist", element: <AIVisaAssist /> },
      { path: "/AIJobAssist", element: <AIJobAssist /> },
      {
        path: "/description/:id", element: <JobDescription />
      },
      { path: "/company", element: <Companies /> },
      {
        path:"/admin/companies/create",
        element:<CompanyCreate />
      },
      {
        path:"/admin/companies/:id",
        element:<CompanySetup/>
      },
      {
        path:"/admin/jobs",
        element:<AdminJobs />
      },
      {
        path:"/admin/jobs/create",
        element:<PostJob />
      },
      {
        path:"/admin/jobs/:id/applicants",
        element:<Applicants/>
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
