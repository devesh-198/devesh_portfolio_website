import React from 'react';

import classes from './skills.module.css';

const NewSkills = () => {

    const technologiesArray = ['React Native', 'React.Js.', 'Redux', 'Django', 'Django Rest Framework', 'JavaScript.', 'Python', 'JQuery', 'Webpack', 'Babel', 'HTML.', 'CSS.', 'Firebase.', 'Material-UI.', 'Heroku.']

    let i = 0
    let j = 0
    let k = 0

    document.addEventListener("DOMContentLoaded" , event => {
        let interval = setInterval(() => {changeInnerHtml()}, 100)
        
        const changeInnerHtml = () => {
            if (k === technologiesArray.length * 2) {
                k = 0
                clearInterval(interval)
                setTimeout(() => {
                    interval = setInterval(() => {changeInnerHtml()}, 100)
                }, 2000);

                document.getElementById("technologies").innerHTML = `I build great applications with ${technologiesArray[j]}`
                j++
                j === technologiesArray.length && (j = 0)
            }else {
                i === technologiesArray.length && (i = 0)
                document.getElementById("technologies").innerHTML = `I build great applications with ${technologiesArray[i]}`
                i++;
                k++;
            }
        }
    })

    return (
        <>
        <h2 className={classes.skillsHeading}>Skills:</h2>
        <p className={classes.skillsList}>React Native, React.Js, Redux, Django, Django Rest Framework, JavaScript, Python, JQuery, Webpack, Babel, HTML, CSS, Firebase and Material-UI.</p>
        <div className={classes.skills}>
            
            <p id="technologies"></p>
        </div>
        </>
    );
}

export default NewSkills;