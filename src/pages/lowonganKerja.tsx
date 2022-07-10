import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchWrapper from "../components/search/searchWrapper";
import ContentLoker from "../components/lowonganKerja/contentLoker";
import ResultWrapper from "../components/result/resultWrapper";

const LowonganKerja = () => {
    return(
        <div>
            <Navbar />
            <SearchWrapper />
            <ResultWrapper />
            <ContentLoker />
            <Footer />
        </div>
    )
}

export default LowonganKerja;