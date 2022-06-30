import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Home,
  LowonganKerja,
  Perusahaan,
  TipsKarir,
  Beasiswa,
  Login,
  Daftar
} from './pages/index';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lowongan-kerja" element={<LowonganKerja />} />
          <Route path="/perusahaan" element={<Perusahaan />} />
          <Route path="/tips-karir" element={<TipsKarir />} />
          <Route path="/beasiswa" element={<Beasiswa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
