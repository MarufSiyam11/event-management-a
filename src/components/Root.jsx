import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <Outlet></Outlet>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Root;