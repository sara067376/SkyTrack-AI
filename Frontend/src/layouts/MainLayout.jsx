import { Outlet } from "react-router-dom";
import {Navbar,Footer } from '../layouts'



const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the current route */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
