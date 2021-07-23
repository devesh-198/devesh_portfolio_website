import React from 'react';

import classes from './footer.module.css';

import gmailIcon from '../../../assets/new_version/gmail.png';
import linkedinIcon from '../../../assets/new_version/linkedin.png';
import githubIcon from '../../../assets/new_version/github.png';
import twitterIcon from '../../../assets/new_version/twitter.png';

const Footer = () => {

    return (
        <div className={classes.footer}>
            <div className={classes.message}>
                <h2>Explore | Experiment | Improve</h2>
                <p>One Day at a Time</p>
            </div>
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
            <p>Thanks for visiting, have a good day.</p>
            <p>Handcrafted by Devesh Gupta</p>
        </div>
    )
} 

export default Footer;