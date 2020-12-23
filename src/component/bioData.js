import React from 'react';

import classes from './bioData.module.css';

const crtEl = React.createElement

const about1 = `     Hey There, Welcome to My Portfolio Website. My Name is DEVESH GUPTA. I'm a Frontend Web Developer. My Go to Framework for Web Development is REACT but I've Also Worked With DJANGO.`;

const about2 = `I Seek to Create Projects that Bring your Vision to Life, In the Form of Web Applications, For The World to Resonate With.`;

const about3 = `My Immense Desire to be The Master of My Craft, Feeds My Passion For Coding and UI. I Also Aspire to Become a Fullstack Web Developer soon.`;

const bioData = (
    crtEl('div', {className: classes.biodata},
        crtEl(
            'h2', null, `About`
        ),
        crtEl('div', {className: classes.para},
            crtEl('p', {className: classes.abt1}, about1),
            crtEl('p', {className: classes.abt2}, about2),
            crtEl('p', {className: classes.abt3}, about3) 
        )   
    )
)

export default bioData;