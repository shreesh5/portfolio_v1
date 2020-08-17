import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Typography, Box, makeStyles } from '@material-ui/core'
import iconMap from './Icons'

const useStyles = makeStyles({
    landingSection: {
        width: "100%",
        height: "100vh",
        position: 'relative'
    },
    center: {
        margin: 0,
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: "47%",
        left: "50%",
        marginRight: "-50%",
        transform: `translate(-50%, -50%)`
    },
    arrow: {
        position: 'absolute',
        bottom: 0,
        display: 'block',
        left: "50%",
        marginLeft: "-3px",
        width: "100px",
        zIndex: 1,
        color: 'white'
    },
    name: {
        fontSize: "62px",
    },
    greetings: {
        fontSize: "20px"
    }
})

const Landing = () => {
    
    const classes = useStyles()

    const data = useStaticQuery(graphql`
    query MyQuery {
        landingPageImage: file(relativePath: {eq: "MaterialRed.jpg"}) {
        childImageSharp {
            fluid (maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `)
    
    return (
        <Box className={classes.landingSection} id="main">
            <Img 
                fluid={data.landingPageImage.childImageSharp.fluid}
                alt="Landing Page"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                }}
            />
            <Box className={classes.center}>
                <Typography variant="h1" className={classes.name}>
                    Hi, I'm Shreesh
                </Typography>
                <Typography variant="subtitle1" className={classes.greetings}>
                    Software Engineer | Mobile Developer
                </Typography>
            </Box>
            <Box className={classes.arrow}>
                {iconMap("chevron")}    
            </Box>
        </Box>
    )
}

export default Landing