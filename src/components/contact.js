import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import contactList from '../data/contact.json'
import iconMap from './Icons'

const useStyles = makeStyles({
    contactSection: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: "400px",
        width: "100%",
        paddingTop: "30px",
    },
    iconBox: {
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '100px'
    }
});

const Contact = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contactSection} id="contact">
            <Typography variant="h3">
                Contact
            </Typography>
            <Box className={classes.iconBox}>
                {
                    contactList.map(contact => {
                        return (
                            <OutboundLink
                                href={contact.url}
                                target="_blank"
                                title={`External link to my ${contact.name} account`}
                                rel="noopener noreferrer"
                            >
                                {iconMap(contact.icon)}
                            </OutboundLink>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Contact
