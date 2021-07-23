import React from 'react';

import classes from './skills.module.css';

const NewSkills = () => {

    const technologiesArray = ['JavaScript.', 'React.Js.', 'HTML.', 'CSS.', 'Firebase.', 'Material-UI.', 'Heroku.']

    let i = 0
    let j = 0
    let k = 0

    document.addEventListener("DOMContentLoaded" , event => {
        let interval = setInterval(() => {changeInnerHtml()}, 100)
        
        const changeInnerHtml = () => {
            if (k === 14) {
                k = 0
                clearInterval(interval)
                setTimeout(() => {
                    interval = setInterval(() => {changeInnerHtml()}, 100)
                }, 2000);
                
                document.getElementById("technologies").innerHTML = `I build great applications with ${technologiesArray[j]}`
                j++
                j === 7 && (j = 0)
            }else {
                i === 7 && (i = 0)
                document.getElementById("technologies").innerHTML = `I build great applications with ${technologiesArray[i]}`
                i++;
                k++;
            }
        }
    })

    return (
        <div className={classes.skills}>
            <p id="technologies"></p>
        </div>
    )
}

export default NewSkills;