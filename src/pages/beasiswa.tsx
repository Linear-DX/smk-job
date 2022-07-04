import { BeasiswaContextProvider } from "../components/BeasiswaContext";
import Scholarship from "../components/Beasiswa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Beasiswa  = () => {
  return (
    
    <BeasiswaContextProvider>
      <Navbar />  
      <Scholarship />
      <Footer />
    </BeasiswaContextProvider>
  );
}

export default Beasiswa;