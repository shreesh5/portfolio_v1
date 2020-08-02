import React from 'react'
import { Box, Typography, SvgIcon } from '@material-ui/core'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight'

const BulletPoint = ({ title, text, icons }) => {

    console.log(icons)
    return (
        <div>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                <SubdirectoryArrowRightIcon fontSize="medium"/>
                <Typography variant="h5" style={{ marginTop: 3}}>
                    {title}
                </Typography>
            </Box>
            <Box style={{flexDirection: 'column', display: 'flex', marginLeft: 30}}>
            { (icons) ? 
                (icons.map(icon => (
                    <Box style={{flexDirection: 'row', display: 'flex'}}>
                        <Typography style={{marginRight: 5}}>
                            {icon.text}
                        </Typography>
                        <SvgIcon fontSize="medium" viewBox="0 0 512 512">
                            <path d={icon.svg} />
                        </SvgIcon>
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
