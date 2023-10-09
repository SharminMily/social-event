/* eslint-disable react/prop-types */
const ServiceCard = ({event}) => {
    const { id, date, category, description, image, price} = event;
    return (
        <div className="">
            
            <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className="w-full h-52" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{category}</h2>
                        <p className="text-xl font-semibold text-blue-900">Price: ${price}</p>

                        {
                            description?.length > 120 ? <p className="pb-4">{description.slice(0, 120)}...</p> : <p>{description}</p>
                        }

                        <div className="card-actions ">
                           <div className="w-full" to="/serviceDetails">
                           <button className="btn btn-primary w-full bg-blue-900 text-white normal-case text-lg">Show Details</button>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ServiceCard;