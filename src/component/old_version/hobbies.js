import React from 'react';

import classes from './hobbies.module.css';

const crtEl = React.createElement;

const hobbies = (
    crtEl('div', {className: classes.hobby}, 
        crtEl('h2', null, `Hobbies`),
        crtEl('p', null, `Reading`)
    )
)

export default hobbies;