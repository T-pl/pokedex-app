import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{ background: '#F2B807' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POKEDEX!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem display='flex' flexDirection='column' onClick={handleCloseNavMenu}>
                <Link style={{ color: '#000', textDecoration: 'none' }} to='/'>
                  <Typography textAlign="center">
                    Home
                  </Typography>
                </Link>
                <Link style={{ color: '#000', textDecoration: 'none' }} to='/pokemons'>
                  <Typography textAlign="center">
                    Pokémons
                  </Typography>
                </Link>
                <Link style={{ color: '#000', textDecoration: 'none' }} to='/favoritos'>
                  <Typography textAlign="center">
                    Favoritos
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'none' } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pokedex!
          </Typography>

          <Box style={{ marginLeft: '700px', gap: '25px' }} sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link style={{ color: '#fff', textDecoration: 'none' }} to='/'>
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link style={{ color: '#fff', textDecoration: 'none' }} to='/pokemons'>
                Pokémons
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link style={{ color: '#fff', textDecoration: 'none' }} to='/favoritos'>
                Favoritos
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}




