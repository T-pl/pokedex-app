import { Button, Container } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Banner from '../../assets/pikachu-banner.png'
import { Link } from 'react-router-dom'


export default function Home() {

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <main>
          <div className='right-side'>
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
          </div>
          <div className='left-side'>
            <img src={Banner} alt="Banner Pikachu" />
          </div>
        </main>


      </Container>
    </div>
  )
}

