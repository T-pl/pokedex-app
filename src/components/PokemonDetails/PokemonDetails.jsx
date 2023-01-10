import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function PokemonDetails() {
  const { name } = useParams();
  const [selectPokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    if (!name) return;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemonDetail(res.data))
  }, [name]);

  useEffect(() => {
    console.log('details', selectPokemonDetail)
  }, [selectPokemonDetail])

  return (
    <>
      <Navbar
      />
      <Box m={2} >
        {selectPokemonDetail.sprites ? <img
          width='100%' src={selectPokemonDetail.sprites.front_default} alt={name} /> : null}
        <Box display='flex' flex-direction='row' gap={1}>
          <Typography variant='h2'>
            {selectPokemonDetail.name}
          </Typography>
        </Box>
        <Box display='flex' flex-direction='row' gap={1}>
          <Typography>Altura:</Typography>
          <Typography>
            {selectPokemonDetail.height}
          </Typography>
        </Box>
        <Box display='flex' flex-direction='row' gap={1}>
          <Typography>
            Peso:
          </Typography>
          <Typography>
            {selectPokemonDetail.weight}
          </Typography>
          {/* {Boolean(selectPokemonDetail.stats) && selectPokemonDetail.stats.map((item) => {
            return (
              <>
                <Typography>
                  STATS:
                </Typography>
                <Typography>
                  {item.base_stat}
                </Typography>
              </>
            )
          })} */}
        </Box>
      </Box>
    </>
  )
}

