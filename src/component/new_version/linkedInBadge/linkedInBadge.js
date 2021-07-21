import React from 'react';

import classes from './linkedInBadge.module.css';

const linkedInBadge = (
		<div className={classes.linkedInBadge}>
			<div 
				class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="devesh-gupta-1908"data-version="v1"
			>
				<a 
					class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/devesh-gupta-1908?trk=profile-badge" target="_blank" rel="noreferrer"
				>
				</a>
			</div>
		</div>
)

export default linkedInBadge;