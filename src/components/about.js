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
import about1_bulletpoints from '../data/about_part1.json'
import about2_bulletpoints from '../data/about_part2.json'

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
                    <Box style={{flexDirection: 'column', display: 'flex', minWidth: 350, maxWidth: 500, height: "100%"}}>
                        {
                            about1_bulletpoints.map(bulletpoint => (
                                <BulletPoint 
                                    title={bulletpoint.title}
                                    text={bulletpoint.text}
                                />
                            ))
                        }
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
                        {
                            about2_bulletpoints.map(bulletpoint => (
                                <BottomBulletPoint 
                                    title={bulletpoint.title}
                                    icon={bulletpoint.icon}
                                    points={bulletpoint.points}
                                    isMobile={isSmall}
                                />
                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About