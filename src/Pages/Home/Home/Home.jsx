import Factory from "../../Factory/Factory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import LatestCollection from "../LatestCollection/LatestCollection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <LatestCollection></LatestCollection>
            <Factory></Factory>
        </div>
    );
};

export default Home;

