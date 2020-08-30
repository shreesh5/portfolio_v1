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
    Drawer,
    useScrollTrigger
} from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import NavBarLink from './Navbarlink';
import iconMap from './Icons';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: 'white'
    },
    headerOptions: {
      display: "flex",
      flex: 1,
      marginLeft: 'auto',
      justifyContent: 'space-evenly'
    },
    list: {
      width: '200px',
      textAlign: 'center',
      justifyContent: 'space-between',
      marginTop: '70px'
    },
    offset: theme.mixins.toolbar,
    buttonStyle: {
      textTransform: 'none',
      marginTop: '3px',
      marginLeft: '3px'
    }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const trigger = useScrollTrigger({ 
    threshold: 150, 
    disableHysteresis: true 
  });

  return (
    <div className={classes.root}>
        <AppBar position="fixed" style={ !trigger ? { background: "transparent", boxShadow: "none" } : {} } color="primary">
            <Toolbar>
              <OutboundLink
                  href="https://www.shreeshnayak.com"
                  className={classes.title}
              >
                <Typography variant="h6">
                    Shreesh Nayak
                </Typography>
              </OutboundLink>
            <div>
                { isMobile ? 
                    <>
                        <IconButton
                            onClick={handleMenu}
                            color="inherit"
                        >
                            {iconMap("menu")}
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={handleClose}
                            variant="temporary"
                        >
                          <List className={classes.list}>
                            <ListItem>
                              <NavBarLink to="about" name="About Me"/>
                            </ListItem>
                            <ListItem>
                              <NavBarLink to="projects" name="Projects"/>
                            </ListItem>
                            <ListItem>
                              <NavBarLink to="contact" name="Contact"/>
                            </ListItem>
                            <ListItem>
                              <OutboundLink
                                href="https://drive.google.com/file/d/1wwUQMIhAbg8rRc71X52MxDhQVtx04RhN/view?usp=sharing"
                                target="_blank"
                                style={{textDecoration: 'none' }}
                              >
                                <Button 
                                  variant="contained" 
                                  color="secondary" 
                                  size="medium" 
                                  className={classes.buttonStyle}
                                >
                                  Resume
                                </Button>
                              </OutboundLink>
                            </ListItem>
                          </List>
                        </Drawer>
                    </> 
                    :
                    <Box className={classes.headerOptions}>
                        <NavBarLink to="about" name="About Me"/>
                        <NavBarLink to="projects" name="Projects"/>
                        <NavBarLink to="contact" name="Contact"/>
                        <OutboundLink
                          href="https://drive.google.com/file/d/1wwUQMIhAbg8rRc71X52MxDhQVtx04RhN/view?usp=sharing"
                          target="_blank"
                          style={{textDecoration: "none" }}
                        >
                          <Button 
                            variant="contained" 
                            color="secondary" 
                            size="small" 
                            className={classes.buttonStyle}
                          >
                            <Typography>Resume</Typography>
                          </Button>
                        </OutboundLink>
                    </Box>
                }
            </div>
            </Toolbar>
        </AppBar>
    </div>
  );
};