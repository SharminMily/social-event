import retirement from '../../assets/retirementCover.png'
import weddings from '../../assets/weddingsCover.png'
import birthday from '../../assets/birthdayCover.png'
import anniversarie from '../../assets/anniversariesCover.png'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={retirement} className="w-full lg:h-[90vh]" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='top-60'>
                           
                            <p className="text-white text-3xl"  data-aos="flip-left">Farewell <span className='hover:font-semibold p-2'>Retirement</span> Party</p>

                            <div className="text-center">
                                <button className='text-white font-bold hover:bg-blue-900 text-2xl  rounded-lg p-4 mt-4 border '>Events</button>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={weddings} className="w-full lg:h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='top-60'>

                            <p className="text-white text-3xl"  data-aos="flip-left" >A beautiful <span className='hover:font-semibold p-2'>Wedding</span> celebration
                            </p>
                            
                            <div className="text-center">
                                <button className='text-white font-bold hover:bg-blue-900 text-2xl  rounded-lg p-4 mt-4 border '>Event</button>
                            </div>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={birthday} className="w-full lg:h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='top-60'>
                           
                            <p className="text-white text-3xl"  data-aos="flip-left">Alice's 7th  <span className='hover:font-semibold p-2'>Birthday</span>  Bash
                            </p>
                            <div className="text-center">
                                <button className='text-white font-bold hover:bg-blue-900 text-2xl  rounded-lg p-4 mt-4 border '>Event</button>
                            </div>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={anniversarie} className="w-full lg:h-[90vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='top-60'>

                            <p className="text-white text-3xl"  data-aos="flip-left">25th <span className='hover:font-semibold p-2'>Anniversary</span> celebration
                            </p>
                            
                            <div className="text-center">
                                <button className='text-white font-bold hover:bg-blue-900 text-2xl  rounded-lg p-4 mt-2 border '>Event</button>
                            </div>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;