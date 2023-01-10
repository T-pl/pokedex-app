import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PokemonCard from '../../components/PokemonCard/PokemonsCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import './PokemonPage.css'

export default function PokemonPage(props) {
  const [pokemons, setPokemons] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState('');

  const filteredPokemons = selectPokemon ? pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(selectPokemon.toLowerCase())) : pokemons

  const getPokemons = async () => {
    await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => {
        let pokemonsWithImages = res.data.results.map((pokemon) => {
          return Axios.get(pokemon.url)
            .then((res) => {
              return {
                name: pokemon.name,
                image: res.data.sprites.front_default,
              }
            })
        })
        Promise.all(pokemonsWithImages)
          .then((completedPokemons) => {
            setPokemons(completedPokemons);
          })
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPokemons();
  }, []);



  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={5}>
          <div id="searchPokemons">
            <h2>Diversos <b>Pokémons</b> para você escolher o seu favorito!</h2>
            <input id='searchpokemon' type="text" placeholder='Encontre seu Pokemon Preferido' value={selectPokemon} onChange={(e) => setSelectPokemon(e.target.value)} />
          </div>
          <Grid container spacing={1}>
            {filteredPokemons.map((pokemon, key) => {
              return (
                <Grid item xs={12} lg={4}>
                  <>
                    <PokemonCard
                      name={pokemon.name}
                      image={pokemon.image}
                    />
                  </>
                </Grid>
              )

            })}
            {/* <h2>Pokemon Selecionado:{selectPokemon.name || "Nenhum Pokemon Selecionado"}</h2> */}
          </Grid>
        </Box>

      </Container>

    </>
  )
}

