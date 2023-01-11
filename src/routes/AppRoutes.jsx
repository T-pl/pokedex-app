import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import MyPokemons from '../pages/MeusPokemons/MyPokemons';
import PokemonPage from '../pages/PokemonPage/PokemonPage';
import Home from "../pages/Home/Home";
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/pokemons' element={<PokemonPage />} />
        </Routes>
        <Routes>
          <Route path='/favoritos' element={<MyPokemons />} />
        </Routes>
        <Routes>
          <Route path='/detalhes/:name' element={<PokemonDetails />} />
        </Routes>
      </Router>
    </>

  );
}
