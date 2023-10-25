import React, {useState} from 'react';
import { AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import myLogo from '../../Assets/Logos/TamirGino.png'

const pages = ['About', 'Projects', 'Skills', 'Contact'];

function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} position="sticky" sx={{background: 'transparent',
        Width:'100vw', minWidth:'100vw', height: '15vh'}}>
      <Container maxWidth="xl" sx={{padding:'15px', position:"relative"}}>
        <Toolbar disableGutters>
          <Box sx={{  padding:'5px' }}>
            <Link to="/home">
                <IconButton >
                  <Avatar alt="Tamir Gino" src={myLogo} sx={{ width: 60, height: 60 }}/> 
                </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 50 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', gap:'50px' } }}>
            {pages.map((page) => (
              <Link to={"/" + page.toLowerCase()}
                key={page}
                className={styles.nav_link}
                >
                    {page}
                </Link>
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
                zIndex: 50, 
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