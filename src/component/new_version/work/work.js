import React from 'react';

import burgerBuilderGif from '../../../assets/old_version/burgerBuilder.gif';
import learningLogGif from '../../../assets/old_version/learningLog.gif';
import blogPostGif from '../../../assets/old_version/blogPost.gif';

import classes from './work.module.css';

const Work = () => {

	const workData = [
		{
			name: "Burger Builder",
			about: [
				"Built using JavaScript and React(Create-react-app). Hosted on Firebase.",
				"Configured with Firebase Real-time Database and Firebase Authentication",
				"It mocks a real-world food odering websites; you can build your burger and then place an order."
			],
			gif: burgerBuilderGif,
			gitHubUrl: 'https://github.com/devesh-198/Burger_builder',
			websiteUrl: 'https://react-my-burger-2630a.web.app/'
		},
		{
			name: "Learning Logs",
			about: [
				"Buitl using Python and Django. Hosted on Heroku.",
				"Configured User authentication.",
				"Lets you track your learning by logging them to your account"
			],
			gif: learningLogGif,
			gitHubUrl: 'https://github.com/devesh-198/learning-log',
			websiteUrl: 'https://devesh-logs.herokuapp.com/'
		},
		{
			name: "Blog Post",
			about: [
				"Buitl using Python and Django. Hosted on Heroku.",
				"Configured User authentication.",
				"Lets you make posts to your blog that can and also edit them later."
			],
			gif: blogPostGif,
			gitHubUrl: 'https://github.com/devesh-198/blog-post',
			websiteUrl: 'https://devesh-blogs.herokuapp.com/'
		}
	]

	const buildHtml = (
		workData.map(data => (
			<div>
				<div>
					<img src={data.gif} alt="view of the website in a gif"></img>
				</div>
				<div>
					<div>
						<h3>{data.name}</h3>
						<ul>
							{data.about.map(line => (
								<li>{line}</li>
							))}
						</ul>
					</div>
					<div className={classes.buttons}>
						<a
							href={data.gitHubUrl}
							target="_blank"
							rel="noreferrer"
						>GitHub Repository</a>
						<a
							href={data.gitHubUrl}
							target="_blank"
							rel="noreferrer"
						>View Website</a>
					</div>
				</div>
			</div>
		))
	)


	return (
		<div className={classes.project}>
			<h2>Projects</h2>
			<div className={classes.work}>
				{buildHtml}
			</div>
		</div>
	)
}

export default Work;