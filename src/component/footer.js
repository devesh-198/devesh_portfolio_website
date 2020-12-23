import React from 'react';

import classes from './footer.module.css';

const crtEl = React.createElement

const backToTop = (
    crtEl('a', {href:"#top", className: classes.foot}, `Back to top of page`)
)

export default backToTop;