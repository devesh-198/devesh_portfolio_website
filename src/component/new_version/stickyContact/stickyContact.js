import React from 'react';

import classes from './stickyContact.module.css';

import gmailIcon from '../../../assets/new_version/gmail.png';
import linkedinIcon from '../../../assets/new_version/linkedin.png';
import githubIcon from '../../../assets/new_version/github.png';
import twitterIcon from '../../../assets/new_version/twitter.png';

const StickyContact = () => {
    return (
        <div className={classes.icons}>
            <a
                href="mailto:devesh.gupta.198@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="send a mail to Devesh Gupta"
            >
                <img src={gmailIcon} alt=''></img>
            </a>
            <a
                href="https://www.linkedin.com/in/devesh-gupta-1908/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
            >
                <img src={linkedinIcon} alt=""></img>
            </a>
            <a
                href="https://github.com/devesh-198"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
            >
                <img src={githubIcon} alt=""></img>
            </a>
            <a
                href="https://twitter.com/Devesh_Gupta_19"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
            >
                <img src={twitterIcon} alt=""></img>
            </a>
        </div>
    )
}

export default StickyContact;