import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import './Navbar.css'
const pages = ['home', 'pokemons', 'meuspokemons'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#00264b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className='link-style' style={{ textDecoration: "none", color: "#fff" }} to={`/${page}`}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POKEDEX!
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className='link-style' style={{ textDecoration: "none", color: "#fff" }} to={`/${page}`}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}





// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.png'
// import './Navbar.css'
// import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

// function Navbar() {
//   return (
//     <>
//       <AppBar sx={{ background: "#00264b" }} >
//         <Toolbar>
//           <CatchingPokemonIcon />
//           <ul>
//             <li>
//               <Link to="/" className='links-nav'>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/pokemons" className='links-nav'>
//                 Pokedex
//               </Link>
//             </li>
//             <li>
//               <Link to="/meuspokemons" className='links-nav'>
//                 Raridades
//               </Link>
//             </li>
//           </ul>
//         </Toolbar>
//       </AppBar>
//       {/* <header>
//         <Link to="/">
//           <img src={logo} alt="Logo Viptech" />
//         </Link>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/" className='links-nav'>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/pokemons" className='links-nav'>
//                 Pokedex
//               </Link>
//             </li>
//             <li>
//               <Link to="/meuspokemons" className='links-nav'>
//                 Raridades
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header> */}
//     </>
//   )
// }

// export default Navbar


