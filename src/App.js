import Navbar from './components/navbar.tsx';
import Carousel from './components/carousel.tsx';
import Content from './components/content.tsx';
import Search from './components/search.tsx';
import './styles/carousel.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Search />
      <Content />
    </div>
  );
}

export default App;
