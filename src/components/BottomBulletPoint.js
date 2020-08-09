import React from 'react'
import { Box, Typography, SvgIcon, makeStyles } from '@material-ui/core'
import { ToolBoxIcon, BookIcon, WebDevIcon } from './Icons'

const useStyles = makeStyles((theme) => ({
    defaultStyle: {
        width: '33%'
    },
    mobileStyle: {
        minWidth: 350
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
        <Box border={1} className={!isMobile ? classes.defaultStyle : classes.mobileStyle}>
            <Box style={{flexDirection: 'row', display: 'flex'}}>
                {/*<SvgIcon fontSize="small" viewBox="0 0 512 512" style={{marginTop: 5}}>
                    <path d="m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0" />
                </SvgIcon>*/}
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
                        <SvgIcon fontSize="inherit" viewBox="0 0 512 512" style={{marginRight: 2}}>
                            <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                        </SvgIcon>
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
