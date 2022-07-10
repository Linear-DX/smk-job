import { BeasiswaContextProvider } from "../components/beasiswa/beasiswaContext";
import DataBeasiswa from "../components/beasiswa/dataBeasiswa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Beasiswa  = () => {
  return (
    
    <BeasiswaContextProvider>
      <Navbar />  
      <DataBeasiswa />
      <Footer />
    </BeasiswaContextProvider>
  );
}

export default Beasiswa;