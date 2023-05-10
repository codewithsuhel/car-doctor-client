import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data=>{
            setServices(data)
        })
    }, [])
    return (
        <div className="mt-24 mb-5">
            <div className=" text-center space-y-5">
                <h3 className="text-2xl font-bold text-orange-600">Service</h3>
                <h2 className="text-5xl">Our service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service=> <ServiceCard
                    key = {service._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>

            <div className="items-center text-center mt-12 mb-12 ">
            <button className="btn btn-outline btn-warning">More Service</button>
            </div>
        </div>
    );
};

export default Services;