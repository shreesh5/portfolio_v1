import React from 'react'
import { Box, Typography } from '@material-ui/core'
import iconMap from './Icons'

const BulletPoint = ({ title, text }) => {

    return (
        <Box style={{ marginBottom: 25 }}>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                { iconMap("outlinedarrow") }
                <Typography variant="h5" style={{ marginTop: 3, marginLeft:5}}>
                    {title}
                </Typography>
            </Box>
            <Box style={{flexDirection: 'column', display: 'flex', marginLeft: 30}}>
                {
                    text.map(t => (
                        <Typography variant="body1" align="left" style={{marginBottom: 10}}>
                            {t}
                        </Typography>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BulletPoint
