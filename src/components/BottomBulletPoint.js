import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { ToolBoxIcon, BookIcon, WebDevIcon, ArrowIcon } from './Icons'

const useStyles = makeStyles((theme) => ({
    defaultStyle: {
        width: '33%',
    },
    mobileStyle: {
        minWidth: 350,
        maxWidth: 500,
    }
  }));

const BottomBulletPoint = ({ isMobile, icon, title, points }) => {

    const classes = useStyles(); 

    const iconMap = {
        "toolbox": <ToolBoxIcon />,
        "book": <BookIcon />,
        "webdev": <WebDevIcon />
    }

    return (
        <Box border={1} className={!isMobile ? classes.defaultStyle : classes.mobileStyle} style={{ marginBottom: 15}}>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                {
                    iconMap[icon]
                }
                <Typography variant="h5" style={{ marginTop: 3}}>
                    {title}
                </Typography>
            </Box>
            <Box style={{flexDirection: 'column', display: 'flex', marginLeft: 3}}>
            {  
                points.map(point => (
                    <Box display="flex" flexDirection="row" align="left" width="100%">
                        <ArrowIcon />
                        <Typography variant="body2" width="100%">
                            <b>{point.title ? point.title : null}</b>
                            {point.text}
                        </Typography>
                    </Box>
                ))
            }
            </Box>
        </Box>
    )
}

export default BottomBulletPoint
