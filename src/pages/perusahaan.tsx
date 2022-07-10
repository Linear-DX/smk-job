import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContentPerusahaan from "../components/perusahaan/contentPerusahaan";
import ResultWrap from "../components/result/resultWrap";
import SearchWrapper from "../components/search/searchWrapper";

const Perusahaan = () => {
    return(
        <div>
            <Navbar />
            <SearchWrapper />
            <ResultWrap />
            <ContentPerusahaan />
            <Footer />
        </div>
    )
}

export default Perusahaan;