import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Service from "./Service";

const Services = () => {
    const [data, setData] =useState([]);
    useEffect (() => {
        fetch('/data.json')
        .then (res => res.json())
        .then (data => setData(data))
    }, [])
    return (
        <div>
        <div>
            <h3 className="text-4xl font-bold text-center pt-10">Our Services</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            data?.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
      </div>
    );
};

export default Services;