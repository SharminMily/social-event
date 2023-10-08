import { FaUserFriends, FaEye } from 'react-icons/fa';
import './DetailsCard.css'

const DetailsCard = ({ event }) => {
    const { id, title, date, category, description, image, viewers, followers, price } = event;
    console.log(event)
    return (       
        <div className="">             
            <div className='bg-slate-400'>
           
           <div className="card glass">
               <figure><img src={image} alt="car!" /></figure>
               <div className="card-body">
                   <div className="flex justify-between">                        

                   </div>
                   <p className='font-bold text-lg'>{date} </p>
                   <p className='font-bold text-lg'>{price}</p>

                   <h2 className="card-title">{title}</h2>
                   <p>{description}</p>                   

                   <div className="card-actions justify-end">

                   <div className='flex justify-center items-center gap-2 badge badge-outline text-blue-900'>
                      <FaUserFriends></FaUserFriends>
                      <p className='font-bold'>{followers}K</p>
                      </div>

                      <div className='flex justify-center items-center gap-2 badge badge-outline text-blue-900'>
                      <FaEye></FaEye>
                      <p className='font-bold'>{viewers}K</p>
                      </div> 
                      
                   </div>


               </div>
           </div>
       </div>
        </div>
    );
};

export default DetailsCard;