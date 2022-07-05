import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Search from "../components/search";
import Footer from "../components/footer";
import ContentTipsKarir from "../components/contents/contentTipsKarir";
import ContentLoker from "../components/contents/contentLoker";

const Home = () => {
    return(
        <div>
           <Navbar />
           <Carousel />
           <Search />
           <ContentTipsKarir />
           <ContentLoker />
           <Footer />
        </div>
    )
}

export default Home;