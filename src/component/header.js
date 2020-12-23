import React from 'react';
import classes from './header.module.css';

import deveshGuptaImage from '../assets/deveshGuptaImage.png';

const header = (
	<div className={classes.header}>
		<div className={classes.name}>
			<div className={classes.quote}>
				<p>If UI design is an art, I'm an artist</p>
			</div>
			<img 
				src={deveshGuptaImage} alt='deveshGuptaImage' title='Devesh Gupta'
				className={classes.devImg}
			></img>
			<h1>Hey!!! <br></br> I'm Devesh Gupta <br></br> Frontend Web Developer</h1>
			<div className={classes.language}>
				<h2>Javascript </h2>
				<h2> React </h2>
				<h2> Python </h2>
				<h2> Django </h2>
				<h2> C</h2>
			</div>
			<a 
				href="https://github.com/devesh-198/DeveshGuptaPortfolio" 
				target="_blank"
                rel="noreferrer"
			>Github repository for this website</a>
		</div>
	</div>
)

export default header;