import React from 'react'
import { Typography } from '@material-ui/core';
import './contact.css'
import contactList from '../data/contact.json'
import iconMap from './Icons'

const Contact = () => {

    return (
        <div className="contact-section" id="contact">
            <Typography variant="h3">
                Contact
            </Typography>
            <div className="icon-box">
                {
                    contactList.map(contact => {
                        return (
                            <a
                                href={contact.url}
                                target="_blank"
                                title={`External link to my ${contact.name} account`}
                                rel="noopener noreferrer"
                            >
                                {iconMap(contact.icon)}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Contact
