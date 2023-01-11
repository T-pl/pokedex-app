import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import './PokemonDetails.css'

export default function PokemonDetails() {
  const { name } = useParams();
  const [selectPokemonDetail, setPokemonDetail] = useState({});
  useEffect(() => {
    if (!name) return;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemonDetail(res.data))
  }, [name]);


  return (
    <>
      <Navbar />
      <Container maxWidth='lg' >
        <Box mt={5}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              {selectPokemonDetail.sprites ? <img id='image-details'
                width='100%' src={selectPokemonDetail.sprites.front_default} alt={name} /> : null}
            </Grid>
            <Grid item xs={12} lg={5} ml={5}>
              <Box display='flex' flex-direction='row' gap={1}>
                <Typography variant='h4'>
                  {selectPokemonDetail.name}
                </Typography>
              </Box>
              <Box display='flex' flex-direction='row' gap={1}>
                <Typography sx={{ fontWeight: 'bold' }}>Altura:</Typography>
                <Typography>
                  {selectPokemonDetail.height}
                </Typography>
              </Box>
              <Box display='flex' flex-direction='row' gap={1}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Peso:
                </Typography>
                <Typography>
                  {selectPokemonDetail.weight}
                </Typography>
              </Box>
              <Box display='flex' flex-direction='row' gap={1}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Tipo:
                </Typography>
                <Typography >
                  {selectPokemonDetail.types ? selectPokemonDetail.types.map((type) => type.type.name.replace(/^./, (str) => str.toUpperCase())) : null}
                </Typography>

              </Box>
              <Box display='flex' flex-direction='row' gap={1}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Habilidades:
                </Typography>
                <Typography >
                  {selectPokemonDetail.abilities ? selectPokemonDetail.abilities.map((ability) => ability.ability.name + ', ') : null}
                </Typography>
              </Box>
              {selectPokemonDetail.stats ? selectPokemonDetail.stats.map((stat) => stat.base_state) : null}

              {console.log(selectPokemonDetail)}
            </Grid>
          </Grid>
        </Box>
      </Container>

    </>
  )
}

