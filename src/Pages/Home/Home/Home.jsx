import About from "../About/About";
import AvailableToy from "../AvailableToy/AvailableToy";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Gallery />
            <AvailableToy />
            <Contact />
        </>
    );
};

export default Home;