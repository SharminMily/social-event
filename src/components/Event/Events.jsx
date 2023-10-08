/* eslint-disable react/prop-types */

import EventCard from "./EventCard";

const Events = ({events}) => {
    
  
    // console.log(events)
    return (
        <div className="mt-16 mx-10"> 
           <h1 className="text-center text-4xl font-bold">All Social Events</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {
                events.map(event => <EventCard key={event.id} event={event}></EventCard>)
            }
           
           </div>
        </div>
    );
};

export default Events;