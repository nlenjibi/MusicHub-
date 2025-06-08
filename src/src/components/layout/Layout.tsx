import type { ReactNode } from "react";
// import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import Container from "./Container";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {children}
    
      <Footer />
     
    </>
  );
};

export default Layout;
