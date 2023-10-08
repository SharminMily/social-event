/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { id, date, category, description, image, price} = event;
    // console.log(event)

    const handleService = () => {        
        // console.log('hello')
        const addServiceArray = [];

        const serviceItem = JSON.parse(localStorage.getItem('event'));
        if (!serviceItem) {
            addServiceArray.push(event);
            localStorage.setItem('event', JSON.stringify(addServiceArray))
            // swal("Good job!", "event added successfully!", "success");
        }
        else {
            const isExits = serviceItem.find((donate) => donate.id === id)
         
            if (!isExits) {
                addServiceArray.push(...serviceItem, event)
                localStorage.setItem('event', JSON.stringify(addServiceArray))
                // swal("Good job!", "event added successfully!", "success");
            }
            else{
                // swal("Error!", "No duplicate !", "error");
            }


        }       
    }
    return (
        <div className="py-10">
            {/* to={`/service/${id}`} */}
            <Link >
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className="w-full h-52" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{category}</h2>
                        <p className="text-xl font-semibold text-blue-900">Price: ${price}</p>

                        {
                            description?.length > 120 ? <p className="pb-4">{description.slice(0, 120)}...</p> : <p>{description}</p>
                        }

                        <div className="card-actions ">
                           <Link className="w-full" to="/serviceDetails">
                           <button onClick={handleService} className="btn btn-primary w-full bg-blue-900 text-white normal-case text-lg">Show Details</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default EventCard;