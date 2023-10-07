import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import OurServices from "../../components/OurServices/OurServices";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto  md:px-6 lg:px-12 ">
            <Header></Header>
            <Banner></Banner>
            <div>
                <OurServices></OurServices>
            </div>

        </div>
    );
};

export default Home;