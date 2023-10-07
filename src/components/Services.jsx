import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Services = () => {
    const [data, setData] =useState([]);
    useEffect (() => {
        fetch('/data.json')
        .then (res => res.json())
        .then (data => setData(data))
    }, [])
    return (
        <Marquee pauseOnHover>
        <div className="card w-96 bg-base-100 shadow-xl">
            

        <figure className="px-10 pt-10">
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">dta : {data.length}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
          
        </div>
       
      </div>
      </Marquee>
    );
};

export default Services;