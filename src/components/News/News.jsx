import annual from "../../assets/annual.jfif"
import artist from "../../assets/artist.jpeg"
import brand from "../../assets/brand-.png"
import concerts from "../../assets/concerts.jpg"
import confarence from "../../assets/confarence.jpg"
import exhibitions from "../../assets/exhibitions.jfif"
import fashion from "../../assets/fashion.jpg"
import product from "../../assets/product.jfif"
import virtual from "../../assets/virtual.jpeg"
import Banner from "../Banner"
const News = () => {
    return (
        <>
            <div className="">
            <Banner></Banner>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="w-72 h-60 ">
                        <img className="rounded-full " src={confarence} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">CONFERENCE</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={exhibitions} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">EXHIBITIONS</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={product} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">PRODUCT LAUNCH</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={annual} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">ANNUAL MEETING</h1>
                    </div>
                    <div className="w-80 h-60 ">
                        <img className="rounded-full h-40" src={brand} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">BRAND ACTIVATION</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={virtual} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">VIRTUAL CONFERENCE</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={artist} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">ARTIST MANAGEMENT</h1>
                    </div>
                    <div className="w-72 h-60 ">
                        <img className="rounded-full" src={concerts} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">CONCERT</h1>
                    </div>
                    <div className="w-60 h-60 ">
                        <img className="rounded-full h-44 w-64" src={fashion} alt="" />
                        <h1 className="text-center p-3 font-bold text-xl">FASHION SHOW</h1>
                    </div>
                </div>

            </div>

            <div className="p-10 text-center bg-slate-800">
                <h2 className="p-3 font-bold text-4xl">WHY CHOOSE US FOR YOUR EVENT?</h2>
                <p>Event that you will Remember</p>
                <div className="grid grid-cols-2 pt-5">
                    <div >
                        <h2 className="p-3 font-semibold text-xl">ALL KIND OF LOGISTICS AND RESOURCES SUPPORT</h2>
                        <p>As an experienced Event Management company, we have all kind of <br /> Event equipment, logistics and resources available
                        </p>
                    </div>
                    <div>
                        <h2 className="p-3 font-semibold text-xl">EXPERIENCED EVENT PLANNER AND MANAGER</h2>
                        <p>When it's about making your Event successful, it's all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;