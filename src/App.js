import Navbar from "./components/navbar.tsx";
// import Carousel from "./components/carousel.tsx";
// import Content from "./components/content.tsx";
import "./App.css";
import Landing from "./components/tipsSections/landing.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <Landing /> */}
      {/* <Carousel /> */}
      {/* <Content /> */}
      {/* <Intro /> */}
    </div>
  );
}

export default App;
