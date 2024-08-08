import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import CharacterPage from './components/characterPage/characterPage';
import EpisodesPage from './components/episodesPage/episodesPage';
import NotFoundPage from './components/notFoundPage/notFoundPage';
import "./App.css";
import NavbarComponents from './components/navbar/navbarComponents';

// Define los componentes que deseas mostrar en diferentes rutas.
// Configura las rutas utilizando el componente Router y Routes:


function App() {
  return (
    <Router>
      <NavbarComponents/>
      <div className='home'>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/characters" element={<CharacterPage/>}></Route>
          <Route path="/episodes" element={<EpisodesPage/>}></Route>
          <Route path= "/*" element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App