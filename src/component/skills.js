import React from 'react';

import classes from './skills.module.css';

const crtEl = React.createElement

const skills = (
    crtEl('div', {className: classes.skill}, 
        crtEl(
            'h2', null, `skills`
        ),
        crtEl('p', null, `Javascript React`),
        crtEl('p', null, `Python Django`),
        crtEl('p', null, `C`),
        crtEl('p', null, `HTML CSS`),
        crtEl('p', null, `Firebase Heroku`)
    )
)

export default skills;