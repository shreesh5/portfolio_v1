import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton,
} from '@material-ui/core';
import Img from 'gatsby-image';
import iconMap from './Icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    height: '420px',
    marginBottom: '40px',
    borderColor: 'black',
    borderWidth: 2,
    display: 'block',
  },
  title: {
    fontSize: 16,
  },
  media: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: '100%',
    height: '210px',
    '&:hover $media': {
      transform: `scale(0.97)`,
    },
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '2px solid black',
  },
  cardContent: {
    textAlign: 'left',
    height: '160px',
    width: '100%',
    padding: '15px',
  },
  iconStyle: {
    '& svg': {
      fontSize: 33,
    },
  },
  actionAreaContainer: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},
  description: {
    fontSize: 14,
    lineHeight: 'normal',
  },
  iconArea: {
    textAlign: 'left',
    height: '50px',
    width: '100%',
  },
});

export default function OutlinedCard({
  title,
  description,
  fluid,
  icons,
  links,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        classes={{
          root: classes.actionAreaContainer,
          focusHighlight: classes.focusHighlight,
        }}
      >
        <CardMedia className={classes.imgContainer}>
          <Img
            alt="Screenshot of Project"
            fluid={fluid}
            className={classes.media}
          />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom>{title}</Typography>
          <Typography
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.iconArea}>
        {icons &&
          icons.map((icon) => (
            <OutboundLink
              key={links[icon]}
              href={links[icon]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.iconStyle}>
                {iconMap(icon)}
              </IconButton>
            </OutboundLink>
          ))}
      </CardActions>
    </Card>
  );
}
