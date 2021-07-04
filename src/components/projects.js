import React, { useState } from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  MenuItem,
  FormControl,
  Select,
  Box,
  Container,
} from '@material-ui/core';
import Card from './Card';
import projectList from '../data/projects.json';
import { graphql, useStaticQuery } from 'gatsby';

const useStyles = makeStyles({
  projectSection: {
    backgroundColor: '#FFEBEE',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  formControl: {
    minWidth: '250px',
    marginBottom: '50px',
    marginTop: '30px',
  },
  selectEmpty: {
    marginTop: '2px',
  },
  root: {
    textAlign: 'center',
  },
});

const Projects = () => {
  const classes = useStyles();

  const [type, setType] = useState('all');

  const filteredProjectList =
    type === 'all'
      ? projectList
      : projectList.filter((project) => {
          return project.type === type;
        });

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const data = useStaticQuery(graphql`
    query ProjectImgsQuery {
      ProjectImgs: allFile(
        filter: { relativePath: { regex: "/projects/.*.png/" } }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(quality: 100, maxWidth: 350) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);
  const { edges: projectImgData } = data.ProjectImgs;

  return (
    <Box className={classes.projectSection} id="projects">
      <Typography variant="h3">Projects</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={type}
          onChange={handleChange}
          label="type"
          notched={false}
        >
          <MenuItem value="all">All Projects</MenuItem>
          <MenuItem value="web-mobile-dev">Web/Mobile Development</MenuItem>
          <MenuItem value="machine-learning">Machine Learning</MenuItem>
        </Select>
      </FormControl>
      <Container>
        <Grid container align="center" className={classes.gridContainer}>
          {filteredProjectList.map((project) => {
            const image = projectImgData.find((n) => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageFluid = image.node.childImageSharp.fluid;
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={project.name}>
                <Card
                  title={project.name}
                  fluid={imageFluid}
                  description={project.description}
                  icons={project.icons}
                  links={project.links}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
