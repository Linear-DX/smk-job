import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarPerusahaan from "../components/NavbarPerusahaan";
import ListPerusahaan from "../components/ListPerusahaan";
import Result from "../components/Result";

const Perusahaan = () => {
    return(
        <div>
            <Navbar />
            <NavbarPerusahaan />
            <Result />
            <ListPerusahaan />
            <Footer />
        </div>
    )
}

export default Perusahaan;