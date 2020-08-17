import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import iconMap from './Icons';

const useStyles = makeStyles({
    defaultStyle: {
        width: '33%',
    },
    mobileStyle: {
        minWidth: 350,
        maxWidth: 500,
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

const BottomBulletPoint = ({ isMobile, icon, title, points }) => {

    const classes = useStyles(); 

    return (
        <Box className={!isMobile ? classes.defaultStyle : classes.mobileStyle} style={{ marginBottom: 15}}>
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
                    <Box className={classes.point}>
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
