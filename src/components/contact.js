import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography } from '@material-ui/core';
import './contact.css'

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <Typography variant="h3">
                Contact
            </Typography>
            <div className="icon-box">
                <GitHubIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                <EmailIcon fontSize="large"/>
            </div>
        </div>
    )
}

export default Contact
