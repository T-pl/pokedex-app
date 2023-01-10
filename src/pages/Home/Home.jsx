// import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import PokemonCard from '../../components/PokemonCard/PokemonsCard'
// import Axios from 'axios';
// import { useState } from 'react';

export default function Home() {
  // const [pokemons, setPokemons] = useState([]);
  // useEffect(() => {
  //   getPokemons();
  // }, []);
  // const getPokemons = () => {
  //   Axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
  //     .then((res) => setPokemons(res.data.results))
  //     .catch((error) => console.log(error))
  // }
  return (
    <div>
      <Navbar />
      {/* {pokemons.map((pokemon, key) => (
        <PokemonCard
          key={key}
          name={pokemon.name}
        />
      ))} */}

    </div>
  )
}

