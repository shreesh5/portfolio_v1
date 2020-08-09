import React from 'react'
import { Box, Typography, SvgIcon } from '@material-ui/core'

const BulletPoint = ({ title, text, icons }) => {

    console.log(icons)
    return (
        <div>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                <SvgIcon fontSize="small" viewBox="0 0 512 512" style={{marginTop: 5}}>
                    <path d="m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0" />
                </SvgIcon>
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
