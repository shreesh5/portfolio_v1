import React, { useState } from 'react'
import './projects.css'
import { Typography } from '@material-ui/core'
import Card from './Card'
import { Grid } from '@material-ui/core'
import projectList from "../data/projects.json";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { graphql, useStaticQuery } from 'gatsby'
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    gridContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
    },
    formControl: {
        minWidth: 200,
        marginBottom: 50,
        marginTop: 30
      },
      selectEmpty: {
        marginTop: 2,
      },
    root: {
        textAlign: 'center'
    }
});

const Projects = () => {

    const classes = useStyles()

    const [type, setType] = useState('all')

    const filteredProjectList = type === 'all' ? projectList : projectList.filter((project) => {
        return (
            project.type === type
        )
    })

    const handleChange = (event) => {
        setType(event.target.value)
    }

    const data = useStaticQuery(graphql`
        query ProjectImgsQuery {
            ProjectImgs: allFile(filter: {relativePath: {regex: "/projects/.*.png/"}}) {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        fluid(quality:100, maxWidth: 350) {
                            ...GatsbyImageSharpFluid
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
            }
        }
    `)
    const { edges: projectImgData } = data.ProjectImgs;

    return (
        <Box className={classes.root}>
        <div className="projects-section" id="projects">
            <Typography variant="h3">
                Projects
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleChange}
                    label="type"
                    align="center"
                >
                <MenuItem value="all">All Projects</MenuItem>
                <MenuItem value="web-mobile-dev">Web/Mobile Development</MenuItem>
                <MenuItem value="machine-learning">Machine Learning</MenuItem>
                </Select>
            </FormControl>
            <Container>
            <Grid container spacing={3} justify="center" align="center" className={classes.gridContainer}>
                {
                    filteredProjectList.map((project) => {
                        const image = projectImgData.find((n) => {
                            return n.node.relativePath === `projects/${project.img}`;
                        });
                        const imageFluid = image.node.childImageSharp.fluid;
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    title={project.name}
                                    fluid={imageFluid}
                                    description={project.description}
                                    url={project.url}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
            </Container>
        </div>
        </Box>
    )
}

export default Projects
