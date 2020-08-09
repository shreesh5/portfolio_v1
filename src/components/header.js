import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    useMediaQuery,
    useTheme,
    ListItem,
    List,
    Box,
    Button,
    Drawer
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NavBarLink from './navbarlink';


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
  list: {
    width: 200,
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: 70
  },
  offset: theme.mixins.toolbar,
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    SHREESH NAYAK
                </Typography>
            <div>
                { isMobile ? 
                    <>
                        <IconButton
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={handleClose}
                            variant="temporary"
                        >
                          <List className={classes.list}>
                            <ListItem><NavBarLink to="about" name="ABOUT"/></ListItem>
                            <ListItem><NavBarLink to="projects" name="PROJECTS"/></ListItem>
                            <ListItem><NavBarLink to="contact" name="CONTACT"/></ListItem>
                            <ListItem><Button variant="contained" color="secondary">
                              Resume
                            </Button></ListItem>
                          </List>
                        </Drawer>
                    </> 
                    :
                    <Box className={classes.headerOptions}>
                        <NavBarLink to="about" name="ABOUT"/>
                        <NavBarLink to="projects" name="PROJECTS"/>
                        <NavBarLink to="contact" name="CONTACT"/>
                        <Button variant="contained" color="secondary">
                          <Typography>Resume</Typography>
                        </Button>
                    </Box>
                }
            </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}