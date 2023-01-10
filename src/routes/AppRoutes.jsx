import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import MyPokemons from '../pages/MeusPokemons/MyPokemons';
import PokemonPage from '../pages/PokemonPage/PokemonPage';
import Home from "../pages/Home/Home";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='pokemons' element={<PokemonPage />} />
        </Routes>
        <Routes>
          <Route path='meuspokemons' element={<MyPokemons />} />
        </Routes>
      </Router>
    </>

  );
}
