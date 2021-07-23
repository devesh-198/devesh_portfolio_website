import React from "react";
import classes from './header.module.css';
import deveshSketch from '../../../assets/new_version/deveshSketch.jpg';

const Header = () => {

	const header = (
		<div className={classes.head}>
			<div className={classes.mobile}>
				<p>Devesh Gupta</p>
				<p>Frontend Web Developer</p>
			</div>
			<div className={classes.lines}>
				<ul className={classes.Words}>
					<li className={classes.Wordsline}>
						<p>&nbsp;</p>
						<p>Devesh Gupta</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Devesh Gupta</p>
						<p>Frontend Web</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Frontend Web</p>
						<p>Developer</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Developer</p>
						<p>&nbsp;</p>
					</li>
				</ul>
				<div className={classes.greeting}>
					<p className={classes.firstBlock}>I seek to create projects</p>
					<p className={classes.secondBlock}>that bring your vision to life</p>
					<p className={classes.thirdBlock}>in the form of web applications.</p>
				</div>
			</div>
			<div className={classes.devSketch}>
				<img src={deveshSketch} alt="Devesh Gupta"></img>
			</div>
		</div>
	)

	return (
		<>
			{header}
		</>
	)
}

export default Header;