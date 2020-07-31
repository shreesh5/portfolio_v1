import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-scroll'
import NavBarLink from './navbarlink';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    marginLeft: 'auto',
    justifyContent: 'space-evenly'
  },
  offset: theme.mixins.toolbar,
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'transparent',}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SHREESH D NAYAK
          </Typography>
          <div>
              { isMobile ? 
              <>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
              </> 
              :
                <Box className={classes.headerOptions}>
                  <NavBarLink to="about" name="ABOUT"/>
                  <NavBarLink to="projects" name="PROJECTS"/>
                  <NavBarLink to="contact" name="CONTACT"/>
                </Box>
            }
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}