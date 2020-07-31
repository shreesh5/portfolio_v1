import React from 'react'
import './landing.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Typography } from '@material-ui/core'

const Landing = () => {
    
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
    
    console.log(data)
    return (
        <div className="landing-section" id="main">
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
            <div className="center">
                <Typography variant="h1" className="name">
                    HI, I'M SHREESH
                </Typography>
                <Typography variant="subtitle1" className="greetings">
                    Software Developer
                </Typography>
            </div>
        </div>
    )
}

export default Landing