import React from 'react';
import { Link } from 'react-scroll';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    '&:hover': {
      textDecoration: 'underline',
    },
    cursor: 'pointer',
  },
  linkactive: {
    textDecoration: 'underline',
  },
});

const NavBarLink = ({ name, to }) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.link}
      to={to}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
      style={{
        margin: 7,
      }}
    >
      <Typography>{name}</Typography>
    </Link>
  );
};

export default NavBarLink;
