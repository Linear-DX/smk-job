import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContentPerusahaan from "../components/perusahaan/contentPerusahaan";
import ResultWrapper from "../components/result/resultWrapper";
import SearchWrapper from "../components/search/searchWrapper";

const Perusahaan = () => {
    return(
        <div>
            <Navbar />
            <SearchWrapper />
            <ResultWrapper />
            <ContentPerusahaan />
            <Footer />
        </div>
    )
}

export default Perusahaan;