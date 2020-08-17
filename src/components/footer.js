import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    footerSection: {
        textAlign: 'center',
        fontSize: 16,
        height: '120px',
        width: '100%',
        position: 'absolute',
        paddingTop: '30px',
        backgroundColor: '#b71c1c',
        color: 'white'
    },
});

const Footer = () => {

    const classes = useStyles()

    return (
        <Box className={classes.footerSection} id="footer">
            <Typography>
                Inspired by many
            </Typography>
            <Typography>
                Coded by Shreesh Nayak
            </Typography>
        </Box>
    );
};

export default Footer;