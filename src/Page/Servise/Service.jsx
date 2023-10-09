// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Service = () => {
  const events = useLoaderData()

    // console.log(events)


      return (
        <div className="md:m-20"> 
          
           <h1 className="text-center text-4xl font-bold" data-aos="fade-left">All Social Events</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">         
            {
                events.map(event => <ServiceCard key={event.id} event={event}></ServiceCard>)                
            }
            </div> 
        </div>
    );
};

export default Service;