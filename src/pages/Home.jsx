import HomeFour from "../components/home/HomeFour";
import HomeOne from "../components/home/HomeOne";
import HomeThree from "../components/home/HomeThree";
import HomeTwo from "../components/home/HomeTwo";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <HomeOne/>
            <HomeTwo/>
            <HomeThree/>
            <HomeFour/>
        </div>
    );
};

export default Home;