import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchWrapper from "../components/search/searchWrapper";
import ContentLoker from "../components/lowonganKerja/contentLoker";
import ResultWrap from "../components/result/resultWrap";

const LowonganKerja = () => {
    return(
        <div>
            <Navbar />
            <SearchWrapper />
            <ResultWrap />
            <ContentLoker />
            <Footer />
        </div>
    )
}

export default LowonganKerja;