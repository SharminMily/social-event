import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Event/Events";
// import Header from "../../components/Header/Header";
import OurServices from "../../components/OurServices/OurServices";
// import Footer from "../../components/Footer/Footer";
import ReviewClient from "../../components/reviewClient/reviewClient";

const Home = () => {
    const events = useLoaderData()
    // console.log(events)
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto  md:px-6 lg:px-12">
                {/* <Header></Header> */}
                <Banner></Banner>
                <div>
                    <OurServices></OurServices>
                    <Events events={events}></Events>
                    <ReviewClient></ReviewClient>                    
                </div>
            </div>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;