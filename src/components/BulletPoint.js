import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import iconMap from './Icons';

const useStyles = makeStyles({
    heading: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        marginTop: 3,
        marginLeft: 5
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30
    },
    text: {
        textAlign: 'left',
        marginBottom: 10
    }
});

const BulletPoint = ({ title, text }) => {

    const classes = useStyles();

    return (
        <Box style={{ marginBottom: 25 }}>
            <Box className={classes.heading}>
                { iconMap("outlinedarrow") }
                <Typography variant="h5" className={classes.title}>
                    {title}
                </Typography>
            </Box>
            <Box className={classes.content}>
                {
                    text.map(t => (
                        <Typography variant="body1" className={classes.text}>
                            {t}
                        </Typography>
                    ))
                }
            </Box>
        </Box>
    );
};

export default BulletPoint;
