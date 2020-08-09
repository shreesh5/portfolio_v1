import React from 'react'
import './about.css'
import { 
    Typography,
    Grid,
    Paper,
    Box,
    useTheme,
    useMediaQuery
} from '@material-ui/core'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import BulletPoint from './BulletPoint'
import BottomBulletPoint from './BottomBulletPoint'

const About = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const isMedium = useMediaQuery(theme.breakpoints.down("md"))

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

    const icons = [
        {
            text: "Playing Football |",
            svg: "m436.621 74.912c-48.308-48.308-112.537-74.912-180.854-74.912s-132.547 26.604-180.855 74.912-74.912 112.537-74.912 180.855 26.604 132.546 74.912 180.854 112.537 74.912 180.854 74.912 132.547-26.604 180.854-74.912c48.308-48.308 74.912-112.537 74.912-180.854s-26.603-132.547-74.911-180.855zm.125 240.114 43.062-31.137c-3.574 28.944-12.662 56.616-26.732 81.786zm-20.201-22.413-71.515-23.563-24.828-76.415 44.441-60.748 80.028.136c22.188 33.721 34.863 72.757 36.635 113.762zm-160.778 25.933-59.706-43.379 22.806-70.189h73.801l22.806 70.189zm-89.237-49.577-71.628 23.199-64.651-47.027c1.886-40.986 14.672-79.987 36.961-113.654l80.007.091 44.13 61.006zm-108.384 96.142c-13.993-25.204-23.002-52.898-26.495-81.855l42.968 31.255zm362.893-263.128-53.077-.09-16.378-50.674c23.415 10.986 44.991 26.075 63.823 44.907 1.921 1.921 3.789 3.88 5.632 5.857zm-105.247-63.955 24.62 76.171-44.464 60.778h-80.31l-44.122-60.995 24.843-76.116c19.125-5.182 39.059-7.866 59.408-7.866 20.566 0 40.712 2.737 60.025 8.028zm-155.261 12.924-16.522 50.622-53.079-.06c1.703-1.817 3.427-3.619 5.196-5.388 18.988-18.988 40.766-34.166 64.405-45.174zm-81.13 345.779 24.751-76.025 71.621-23.197 64.993 47.22v75.288l-64.778 47.064c-29.628-11.17-56.803-28.614-79.863-51.674-5.957-5.957-11.526-12.198-16.724-18.676zm133.352 80.722 43.013-31.251 43.013 31.251c-14.029 2.692-28.414 4.08-43.013 4.08s-28.984-1.389-43.013-4.08zm122.791-10.371-64.778-47.064v-75.288l64.925-47.171 71.499 23.558 24.541 76.116c-5.083 6.298-10.519 12.371-16.323 18.175-23.061 23.06-50.236 40.504-79.864 51.674z"
        },
        {
            text: "Watching Anime |",
            svg: "m482 25h-452c-16.542 0-30 13.458-30 30v298c0 16.542 13.458 30 30 30h147v74h-81c-8.284 0-15 6.716-15 15s6.716 15 15 15h320c8.284 0 15-6.716 15-15s-6.716-15-15-15h-81v-74h147c16.542 0 30-13.458 30-30v-298c0-16.542-13.458-30-30-30zm-177 432h-98v-74h98zm177-104c-13.157 0-441.456 0-452 0v-298h452c.019 304.472.1 298 0 298z"
        },
        {
            text: "Exercising |",
            svg: "m428.847 22.809c-7.918-14.069-23.02-22.809-39.414-22.809h-132.472c-24.813 0-45 20.187-45 45v60c0 24.813 20.187 45 45 45h90c8.271 0 15 6.729 15 15v117.833c-43.251-11.824-88.843-13.285-132.67-4.37-33.393-31.953-80.688-44.952-127.917-33.143-47.222 11.807-86.413 50.342-97.63 98.306-9.646 41.258-.242 83.755 25.804 116.593 26.099 32.907 64.886 51.781 106.413 51.781 195.815 0 331.363-74.406 367.708-92.583 5.082-2.541 8.292-7.735 8.292-13.417v-65.072c0-111.512-28.741-221.516-83.114-318.119zm53.114 373.948c-48.731 24.546-172.094 85.243-346 85.243-32.314 0-62.533-14.734-82.91-40.425-20.32-25.62-27.645-58.832-20.095-91.12 8.482-36.278 38.902-66.833 75.694-76.033 30.208-7.554 60.493-2.388 84.948 13.753-11.696 4.019-23.172 8.821-34.345 14.407-7.41 3.705-10.413 12.715-6.708 20.125 3.704 7.409 12.714 10.413 20.124 6.708 71.253-35.626 156.329-35.627 227.584 0 7.422 3.712 16.426.688 20.124-6.708 3.705-7.41.702-16.42-6.708-20.125-7.119-3.56-14.364-6.795-21.708-9.719v-127.863c0-24.813-20.187-45-45-45h-15v-45c0-8.284-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v30h-45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h132.473c5.573 0 10.658 2.883 13.271 7.523 51.851 92.121 79.257 197.036 79.257 303.405v55.829z"
        },/*
        {
            text: "Learning New Languages",
            svg: "m437.02 75.006c-47.991-47.988-111.678-74.566-179.484-74.962-.264-.009-.526-.014-.79-.01-141.182-.553-256.746 113.752-256.746 255.991 0 141.481 114.495 256 256 256 68.207 0 132.578-26.541 181.02-74.98 100.043-100.046 100.057-261.981 0-362.039zm-166.02 393.66v-91.7c23.32 1.526 45.993 6.606 67.37 14.97-17.354 29.108-40.145 55.28-67.37 76.73zm0-121.753v-75.888h105.107c-1.94 32.562-10.146 64.493-23.715 94.18-25.717-10.451-53.151-16.662-81.392-18.292zm0-105.888v-75.888c28.241-1.63 55.675-7.841 81.393-18.292 13.568 29.686 21.774 61.618 23.715 94.18zm0-105.94v-91.7c27.225 21.45 50.016 47.622 67.37 76.73-21.377 8.364-44.05 13.444-67.37 14.97zm37.731-98.833c34.519 8.282 65.978 24.504 92.337 46.624-11.108 9.323-22.986 17.485-35.476 24.428-15.234-26.116-34.379-50.143-56.861-71.052zm-67.731 8.731v90.102c-22.727-1.487-44.842-6.345-65.738-14.332 16.974-28.644 39.204-54.464 65.738-75.77zm-93.074 63.153c-13.045-7.121-25.436-15.56-36.994-25.26 27.042-22.692 59.45-39.184 95.024-47.257-23.016 21.278-42.565 45.813-58.03 72.517zm93.074 57.002v75.888h-103.1c1.927-32.316 10.023-64.01 23.409-93.505 25.226 10.04 52.07 16.022 79.691 17.617zm0 105.887v75.888c-27.621 1.595-54.465 7.577-79.69 17.617-13.386-29.495-21.482-61.19-23.409-93.505zm0 105.941v90.102c-26.534-21.306-48.764-47.126-65.738-75.77 20.896-7.987 43.011-12.845 65.738-14.332zm-35.044 99.466c-35.574-8.073-67.982-24.564-95.024-47.257 11.558-9.7 23.949-18.139 36.994-25.26 15.465 26.704 35.014 51.239 58.03 72.517zm159.637-71.685c12.489 6.942 24.367 15.104 35.476 24.428-26.359 22.12-57.818 38.342-92.337 46.624 22.481-20.909 41.626-44.936 56.861-71.052zm13.85-26.64c15.472-33.694 24.731-70.029 26.712-107.082h75.335c-3.472 52.714-25.086 100.549-58.658 137.295-13.506-11.631-28.037-21.742-43.389-30.213zm102.047-137.082h-75.335c-1.98-37.053-11.24-73.388-26.712-107.082 15.352-8.471 29.883-18.582 43.389-30.213 33.572 36.747 55.187 84.582 58.658 137.295zm-392.322-137.295c13.977 12.037 29.06 22.432 45.005 31.08-15.233 33.451-24.356 69.479-26.319 106.215h-77.344c3.471-52.713 25.086-100.548 58.658-137.295zm-58.658 167.295h77.344c1.963 36.736 11.086 72.764 26.319 106.215-15.945 8.648-31.028 19.043-45.005 31.08-33.572-36.746-55.187-84.581-58.658-137.295z"
        }*/
    ]

    const tools_bulletpoints = [
        {
            "title": "Languages and Frameworks: ",
            "text": "Python, JavaScript, HTML, CSS, SQL, ReactJS, React-Native, Django, Flask",
        },
        {
            "title": "Databases: ",
            "text": "MongoDB, Firebase, PostgreSQL",
        },
        {
            "title": "Other Tools: ",
            "text": "Git, Heroku, Windows, Unix/Linux",
        },
    ]

    const learning_bulletpoints = [
        {
            "title": "Currently: ",
            "text": "AWS Lambda, GraphQL",
        },
        {
            "title": "On The Radar: ",
            "text": "SEO",
        }
    ]

    const hacking_bulletpoints = [
        {
            "text": "Earning my MSCS degree",
        },
        {
            "text": "Contributing to the Mobile team at ASU",
        },
    ]

    return (
        <div className="about-section" id="about">
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
                            text ="Playing Football | Watching Anime | Exercising | Reading | Learning New Languages"
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
        </div>
    )
}

export default About