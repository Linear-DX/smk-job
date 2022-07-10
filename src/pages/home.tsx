import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Heading from "../components/heading";
import Footer from "../components/footer";
import ContentTipsKarir from "../components/contents/contentTipsKarir";
import ContentLoker from "../components/contents/contentLoker";

const Home = () => {
    return(
        <div>
           <Navbar />
           <Carousel />
           <Heading />
           <ContentTipsKarir />
           <ContentLoker />
           <Footer />
        </div>
    )
}

export default Home;