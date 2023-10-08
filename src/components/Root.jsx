import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default Root;