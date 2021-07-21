import React from 'react';

import classes from './innerFooter.module.css';

import gmailIcon from '../../assets/old_version/gmailIcon.png';
import twiterIcon from '../../assets/old_version/twiterIcon.png';
import linkedinIcon from '../../assets/old_version/linkedinIcon.png';
import githubIcon from '../../assets/old_version/githubIcon.png';
import codeWarsIcon from '../../assets/old_version/codeWarsIcon.png';
import instagramIcon from '../../assets/old_version/instagramIcon.png';
import facebookIcon from '../../assets/old_version/facebookIcon.png';

const crtEl = React.createElement;

const contactList = (
    <div>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={gmailIcon} 
                    alt='gmail icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="mailto:devesh.gupta.198@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="send a mail to Devesh Gupta"
                >devesh.gupta.198@gmail.com
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={linkedinIcon} 
                    alt='linkedin icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://www.linkedin.com/in/devesh-gupta-1908/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin profile"
                >Devesh Gupta
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={twiterIcon} 
                    alt='twiter icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://twitter.com/Devesh_Gupta_19"
                    target="_blank"
                    rel="noreferrer"
                    title="twitter profile"
                >Devesh_Gupta_19
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={githubIcon} 
                    alt='github icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://github.com/devesh-198"
                    target="_blank" rel="noreferrer"
                    title="Github profile"
                >devesh-198
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={codeWarsIcon} 
                    alt='codewars icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://www.codewars.com/users/Devesh%20Gupta"
                    target="_blank"
                    rel="noreferrer"
                    title="Codewars profile"
                >Devesh Gupta
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={instagramIcon} 
                    alt='instagram icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://www.instagram.com/devesh.198/"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram profile"
                >devesh.198
                </a>
            </div>
        </p>
        <p>
            <div className={classes.listContact}>
                <img 
                    src={facebookIcon} 
                    alt='facebook icon'
                ></img>
                <a
                    className={classes.listItem}
                    href="https://www.facebook.com/devesh.gupta.92123015"
                    target="_blank"
                    rel="noreferrer"
                    title="Facebook profile"
                >Devesh Gupta
                </a>
            </div>
        </p>
    </div>
)

const innerFooter = (
    crtEl('div', {className: classes.contdetail},
        crtEl('p', null, `This website is developed by Devesh Gupta in December, 2020.`),
        crtEl('h2', null, `Contact Details`),
        crtEl('div', null, contactList),
        crtEl('p', null, `Thankyou for visiting.`)
    )
)

export default innerFooter;