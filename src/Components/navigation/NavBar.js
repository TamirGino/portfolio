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
    <AppBar elevation={0} position="sticky" sx={{background: 'transparent'}}>
      <Container maxWidth="xl" sx={{padding:'15px'}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, padding:'15px' }}>
            <HashLink  smooth to={"/#home"}>
                <IconButton >
                  <Avatar alt="Tamir Gino" src={require("../../Assets/avatar.png")} />
                </IconButton>
            </HashLink>
          </Box>
          <Box sx={{ flexGrow: 50 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', gap:'50px' } }}>
            {pages.map((page) => (
            //   <Button
              <HashLink  smooth to={"/#" + page.toLowerCase()}
                key={page}
                className={styles.nav_link}
                >
                
                    {page}
                </HashLink>
                
            //   </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'block', sm: 'none' } }}>
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;