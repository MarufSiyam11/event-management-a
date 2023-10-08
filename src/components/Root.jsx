import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";
import AboutUs from "./AboutUs";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <Outlet></Outlet>
            <Services></Services>

            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Root;