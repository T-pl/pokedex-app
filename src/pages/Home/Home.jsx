import { Button, Container, Grid, Box } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Banner from '../../assets/pikachu-banner.png'
import { Link } from 'react-router-dom'


export default function Home() {

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={5}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <h1>Encontre os seus <b>Pokémons</b> preferidos!</h1>
              <p>Conheça os diferentes tipos de Pokémons, suas habilidades e muito mais.</p>
              <Button variant="contained">
                <Link
                  to={'/pokemons'}
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Encontrar Pokémons
                </Link>
              </Button>
            </Grid>
            <Grid alignItems={"center"} item xs={6} lg={6} >
              <img src={Banner} alt="Banner Pikachu" />
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  )
}

