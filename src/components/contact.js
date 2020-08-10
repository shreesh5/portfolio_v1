import React from 'react'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import { Typography } from '@material-ui/core';
import './contact.css'

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <Typography variant="h3">
                Contact
            </Typography>
            <div className="icon-box">
                <GitHubIcon size="large" />
                <LinkedInIcon />
                <EmailIcon />
            </div>
        </div>
    )
}

export default Contact
