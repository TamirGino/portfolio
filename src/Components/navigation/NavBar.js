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
import { HashLink } from 'react-router-hash-link';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
const pages = ['About', 'Projects', 'Skills', 'Contact'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };



  return (
    <AppBar elevation={0} position="sticky" sx={{background: 'transparent',
        Width:'100vw', minWidth:'100vw', height: '15vh'}}>
      <Container maxWidth="xl" sx={{padding:'15px', position:"relative"}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, padding:'15px' }}>
            <Link to="/home">
                <IconButton >
                  <Avatar alt="Tamir Gino" src={require("../../Assets/avatar.png")} />
                </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 50 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', gap:'50px' } }}>
            {pages.map((page) => (
            //   <Button
              <Link to={"/" + page.toLowerCase()}
                key={page}
                className={styles.nav_link}
                >
                
                    {page}
                </Link>
                
            //   </Button>
            ))}
          </Box>
          <Box sx={{  display: { xs: 'block', sm: 'none' },
                    position: 'relative', zIndex:'50' }}>
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
                zIndex: 50, // Add this line to set a higher z-index than the content
              }}
            >
              {pages.map((page) => (
                <Link  to={"/" + page.toLowerCase()}
                  key={page}
                  className={styles.nav_link_responsive}
                >
                  <MenuItem 
                   key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;