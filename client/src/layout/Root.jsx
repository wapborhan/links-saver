import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <div className="main-content container mx-auto px-20 ">
        <Header />
        <div className="content bg-white pb-32 pt-5 bg-repeat-x  w-full bg-left-bottom bg-contain ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
