import React, { useRef } from "react";
import classes from './header.module.css';
import DeveshGuptaLinkedInImg from '../../../assets/new_version/DeveshGuptaLinkedInImg.jpg';

const Header = () => {

	document.addEventListener('DOMContentLoaded', () => {
		[ref1, ref2, ref3].forEach(ref => {
			ref?.current?.addEventListener('animationend', (event) => {
				ref.current.classList.add(classes.typingComplete);
				ref.current.style.animationPlayState = 'paused';
			});
		});
	});

	const ref1 = useRef();
	const ref2 = useRef();
	const ref3 = useRef();

	const header = (
		<div className={classes.head}>
			<div className={classes.mobile}>
				<p>Devesh Gupta</p>
				<p>Fullstack Developer</p>
			</div>
			<div className={classes.devSketch}>
				<img src={DeveshGuptaLinkedInImg} alt="Devesh Gupta" className={classes.deveshImgStyle}></img>
			</div>
			<div className={classes.lines}>
				<ul className={classes.Words}>
					<li className={classes.Wordsline}>
						<p>&nbsp;</p>
						<p>Devesh Gupta</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Devesh Gupta</p>
						<p>Fullstack</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Fullstack</p>
						<p>Developer</p>
					</li>
					<li className={classes.Wordsline}>
						<p>Developer</p>
						<p>&nbsp;</p>
					</li>
				</ul>
				<div className={classes.greeting}>
					<p ref={ref1} className={classes.firstBlock}>I seek to create projects</p>
					<p ref={ref2} className={classes.secondBlock}>that bring your vision to life</p>
					<p ref={ref3} className={classes.thirdBlock}>in the form of web and mobile apps.</p>
				</div>
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