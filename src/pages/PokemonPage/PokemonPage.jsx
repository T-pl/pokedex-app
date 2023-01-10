import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PokemonCard from '../../components/PokemonCard/PokemonsCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import './PokemonPage.css'

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => setPokemons(res.data.results))
      .catch((error) => console.log(error))
  }
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div id="searchPokemons">
          <h2>Diversos <b>Pokémons</b> para você escolher o seu favorito!</h2>
          <input type="text" placeholder='Encontre seu Pokemon' />
        </div>
        <Grid container gap={4}>
          {pokemons.map((pokemon, key) => {
            return (
              <Grid item xs={3}>
                <PokemonCard
                  name={pokemon.name}
                />

              </Grid>
            )

          })}

        </Grid>

      </Container>

    </>
  )
}

