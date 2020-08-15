import React from 'react'
import { Box, Typography, SvgIcon } from '@material-ui/core'
import iconMap from './Icons'

const BulletPoint = ({ title, text, icons }) => {

    return (
        <div>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                { iconMap("outlinedarrow") }
                <Typography variant="h5" style={{ marginTop: 3, marginLeft:5}}>
                    {title}
                </Typography>
            </Box>
            <Box style={{flexDirection: 'row', display: 'flex', marginLeft: 30}}>
            { (icons) ?
                (icons.map(icon => (
                    <Box style={{flexDirection: 'row', display: 'flex'}}>
                        <SvgIcon fontSize="small" viewBox="0 0 512 512">
                            <path d={icon.svg} />
                        </SvgIcon>
                        <Typography style={{marginRight: 3, marginLeft: 3}}>
                            {icon.text}
                        </Typography>
                    </Box>
                )))
                : (
                    <Typography variant="body1" align="left">
                        {text}
                    </Typography>
                )
            }
            </Box>
        </div>
    )
}

export default BulletPoint
