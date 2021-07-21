import React from 'react';

import classes from './publication.module.css';

const Publication = () => {
    return (
        <div className={classes.publication}>
            <h2>Publication</h2>
            <p>This is my Blog Website</p>
            <iframe src="https://www.techhub.aryavath.com" title="Aryavath Tech Hub"></iframe>
            <div>
                <a href="https://www.techhub.aryavath.com" target="_blank" rel="noreferrer">Open blog website in a new tab</a>
            </div>
        </div>
    )
}

export default Publication;