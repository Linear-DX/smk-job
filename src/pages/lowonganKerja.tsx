import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarPerusahaan from "../components/NavbarPerusahaan";
import ProductList from "../components/ProductList";
import Result from "../components/Result";

const LowonganKerja = () => {
    return(
        <div>
            <Navbar />
            <NavbarPerusahaan />
            <Result />
            <ProductList />
            <Footer />
        </div>
    )
}

export default LowonganKerja;