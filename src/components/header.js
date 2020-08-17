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
} from '@material-ui/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import NavBarLink from './navbarlink';
import iconMap from './Icons'

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
  buttonStyle: {
    textTransform: 'none',
    marginTop: 3
  }
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

  const trigger = useScrollTrigger({ 
    threshold: 150, 
    disableHysteresis: true 
  });

  return (
    <div className={classes.root}>
        <AppBar position="fixed" style={ !trigger ? { background: 'transparent', boxShadow: 'none' } : {} } color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Shreesh Nayak
                </Typography>
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
                            <ListItem><NavBarLink to="about" name="About Me"/></ListItem>
                            <ListItem><NavBarLink to="projects" name="Projects"/></ListItem>
                            <ListItem><NavBarLink to="contact" name="Contact"/></ListItem>
                            <ListItem>
                              <OutboundLink
                                href="https://drive.google.com/file/d/1-RPAwiFsqEOplJ-9ruOAXJ_M82FwszQP/view?usp=sharing"
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
                          href="https://drive.google.com/file/d/1-RPAwiFsqEOplJ-9ruOAXJ_M82FwszQP/view?usp=sharing"
                          target="_blank"
                          style={{textDecoration: 'none' }}
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
}