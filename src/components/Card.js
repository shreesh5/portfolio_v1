import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Img from 'gatsby-image'
import { GitHubIcon } from './Icons'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  root: {
      width: 350,
      height: 420,
        marginLeft: 30,
        marginBottom: 40,
        borderColor: 'black',
        borderWidth: 2,
    },
        title: {
        fontSize: 14,
    },
        pos: {
        marginBottom: 12,
    },
    media: {
        width: "100%",
        height: "100%",
    },
    imgContainer: {
        width: "100%",
        height: 210,
    },
    cardcontent: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        }
    },
    iconStyle: {
        '& svg': {
            fontSize: 33,
        }
    }
});

export default function OutlinedCard({ title, description, fluid, url }) {
    
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardActionArea>
            <CardMedia className={classes.imgContainer} style={{ display: 'flex', justifyContent: 'center', borderBottom: '2px solid black'}}>
                <Img 
                    alt="Screenshot of Project"
                    fluid={fluid}
                    className={classes.media}
                />
            </CardMedia>
            <CardContent style={{ textAlign: 'left', height: 160, width: "100%", padding: 15 }}>
            <Typography gutterBottom>
                {title}
            </Typography>
            <Typography color="textSecondary" component="p" style={{fontSize: 14, lineHeight: 'normal'}}>
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions disableSpacing style={{ textAlign: 'left', height: 50, width: "100%"}}>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton className={classes.iconStyle}>
                    <GitHubIcon />
                </IconButton>
            </a>
        </CardActions>
        </Card>
    );
}