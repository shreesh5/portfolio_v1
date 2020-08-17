import React from 'react'
import { 
    Typography,
    Grid,
    Paper,
    Box,
    useTheme,
    useMediaQuery,
    makeStyles
} from '@material-ui/core'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import BulletPoint from './BulletPoint'
import BottomBulletPoint from './BottomBulletPoint'
import tools_bulletpoints from '../data/tools.json'
import learning_bulletpoints from '../data/learning.json'
import hacking_bulletpoints from '../data/hacking.json'

const useStyles = makeStyles({
    aboutSection: {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: "30px",
    }
});

const About = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const isMedium = useMediaQuery(theme.breakpoints.down("md"))

    const classes = useStyles()

    const data = useStaticQuery(graphql`
    query MyQuery1 {
        profilePicture: file(relativePath: {eq: "Profile.jpg"}) {
        childImageSharp {
            fluid (quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `)

    return (
        <Box className={classes.aboutSection} id="about">
            <Typography variant="h3">About Me</Typography>
            <Grid 
                container
                spacing={3}
                style={{
                    padding: 50,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginBottom: 15
                }}
            >
                <Grid item xs={12} sm={12} md={12} lg={6} align={!isMedium ? "right" : "center"}>
                    <Paper elevation={15} style={{ maxWidth: 450, minWidth: 350 }}>
                        <Img 
                            fluid={data.profilePicture.childImageSharp.fluid}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}  align={!isMedium ? "left" : "center"}>
                    <Box border={1} style={{flexDirection: 'column', display: 'flex', minWidth: 350, maxWidth: 500, height: "100%"}}>
                        <BulletPoint 
                            title="What I Aspire to Do"        
                            text = "My goal as a software engineer is to build applications that make an impact and improve lives. I beleive that through code we can make the world a better place by building products that empower people and make life easier."
                        />
                        <BulletPoint 
                            title="What I'm Currently Doing"
                            text="I am currently pursuing my MS in Computer Science degree at Arizona State University. I am also working as a Mobile Developer at the University Technology Office."
                        />
                        <BulletPoint 
                            title="When I'm not coding, I'm"
                            text ="Playing Football | Watching Anime | Reading | Listening to Music | Exercising | Learning New Languages"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                    <Box 
                        display="flex" 
                        flexDirection={!isSmall ? "row" : "column"} 
                        justifyContent="space-between" 
                        width={!isMobile ? "55%" : "100%"}
                        minWidth={350}
                        marginLeft={!isMedium ? 6 : 0}
                        
                    >
                        <BottomBulletPoint
                            title="Toolbox"
                            points={tools_bulletpoints}
                            icon="toolbox"
                            isMobile={isSmall}
                        />
                        <BottomBulletPoint
                            title="Learning"
                            points={learning_bulletpoints}
                            icon="book"
                            isMobile={isSmall}
                        />
                        <BottomBulletPoint
                            title="Hacking On"
                            points={hacking_bulletpoints}
                            icon="webdev"
                            isMobile={isSmall}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About