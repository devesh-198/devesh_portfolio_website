import React from 'react';

import classes from './website.module.css';

import burgerBuilderGif from '../../assets/old_version/burgerBuilder.gif';
import learningLogGif from '../../assets/old_version/learningLog.gif';
import blogPostGif from '../../assets/old_version/blogPost.gif';

const crtEl = React.createElement

const createProjectCards = ({projectUrl, imageUrl, projectName, gitRepoUrl, delployedWith, language, framework}) => {
    return (
        crtEl('div', null, 
            crtEl('a', {href: `${projectUrl}`,target: "_blank", rel: "noreferrer"}, 
                crtEl('img', {src: imageUrl}, null)
            ),
            crtEl('h4', null, projectName),
            crtEl('p', null, 
                crtEl('a', {href: `${gitRepoUrl}`, className: classes.gitRepo, target: "_blank", rel: "noreferrer"}, `git repository for this project`)
            ), 
            ('p', null, `Devployed with: ${delployedWith}`),
            crtEl('p', null, `Language: ${language}`),
            crtEl('p', null, `Framework: ${framework}`)
        )
    )
}

const website = (
    crtEl('div', {className: classes.webst},
        crtEl('h2', null, `Projects`),
        crtEl('div', {className: classes.projectBlock}, 
            crtEl('div', null,
                createProjectCards({
                    projectUrl : 'https://react-my-burger-2630a.web.app/', 
                    imageUrl : burgerBuilderGif,
                    projectName : 'Burger Builder', 
                    gitRepoUrl : 'https://github.com/devesh-198/Burger_builder', 
                    delployedWith : 'Firebase', 
                    language : 'Javascript', 
                    framework : 'React'
                })
            ),
            crtEl('div', null,
                createProjectCards({
                    projectUrl : 'https://devesh-logs.herokuapp.com/', 
                    imageUrl : learningLogGif,
                    projectName : 'Learning logs', 
                    gitRepoUrl : 'https://github.com/devesh-198/learning-log', 
                    delployedWith : 'Heroku', 
                    language : 'Python', 
                    framework : 'Django'
                })
            ),
            crtEl('div', null,
                createProjectCards({
                    projectUrl : 'https://devesh-blogs.herokuapp.com/', 
                    imageUrl : blogPostGif,
                    projectName : 'Blog post', 
                    gitRepoUrl : 'https://github.com/devesh-198/blog-post', 
                    delployedWith : 'Heroku', 
                    language : 'Python', 
                    framework : 'Django'
                })
            )
        )
    )
)

export default website;