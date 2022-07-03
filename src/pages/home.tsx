import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Search from "../components/search";
import Footer from "../components/footer";
import Content from "../components/content/content";

const Home = () => {
    return(
        <div>
           <Navbar />
           <Carousel />
           <Search />
           <Content />
           <Footer />
        </div>
    )
}

export default Home;