import React from 'react'
import { Box, Typography, SvgIcon } from '@material-ui/core'
import iconMap from './Icons'

const BulletPoint = ({ title, text, icons }) => {

    return (
        <Box border={1} style={{ marginBottom: 25 }}>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                { iconMap("outlinedarrow") }
                <Typography variant="h5" style={{ marginTop: 3, marginLeft:5}}>
                    {title}
                </Typography>
            </Box>
            <Box style={{flexDirection: 'row', display: 'flex', marginLeft: 30}}>
                    <Typography variant="body1" align="left">
                        {text}
                    </Typography>
            </Box>
        </Box>
    )
}

export default BulletPoint
