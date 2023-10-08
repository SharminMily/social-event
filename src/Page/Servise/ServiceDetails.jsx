import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";

const ServiceDetails = () => {


    const [event, setEvent] = useState([]);
    const [notFound, setNoFound] = useState(false);
    const [isSee, setIsSee] = useState(false)

    useEffect(()=>{
        const eventItem = JSON.parse(localStorage.getItem('event'));
        if (eventItem) {
            setEvent(eventItem)
        }
        else {
            setNoFound(' No Donation Found')
        }
    },[])

    return (
        <div>
             <h2 className="text-center text-3xl my-10 text-blue-900">Our All Service Details here </h2>
            
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
           
                {
                    event.map(event => <DetailsCard key={event.id} event={event}></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;