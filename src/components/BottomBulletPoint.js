import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import iconMap from './Icons';

const useStyles = makeStyles({
    defaultStyle: {
        width: '33%',
    },
    title: {
        display: 'flex',
        flexDirection: 'row'
    },
    points: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 3
    },
    point: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
        width: '100%'
    }
  });

const BottomBulletPoint = ({ icon, title, points }) => {

    const classes = useStyles();

    return (
        <Box style={{ width: '100%', marginBottom: '25px' }}>
            <Box className={classes.title}>
                {
                    iconMap(icon)
                }
                <Typography variant="h5" style={{ marginTop: 3}}>
                    {title}
                </Typography>
            </Box>
            <Box className={classes.points}>
            {  
                points.map(point => (
                    <Box className={classes.point} key={point.title}>
                        { iconMap("arrow") }
                        <Typography variant="body2" width="100%">
                            <b>{point.title}</b>
                            {point.text}
                        </Typography>
                    </Box>
                ))
            }
            </Box>
        </Box>
    );
};

export default BottomBulletPoint;
