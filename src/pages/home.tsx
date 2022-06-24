import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Search from "../components/search";
import Footer from "../components/footer";

const Home = () => {
    return(
        <div>
           <Navbar />
           <Carousel />
           <Search />
           <Footer />
        </div>
    )
}

export default Home;