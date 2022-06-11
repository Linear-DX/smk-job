import Navbar from './components/navbar.tsx';
import Carousel from './components/carousel.tsx';
import Content from './components/content.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Content />
    </div>
  );
}

export default App;
