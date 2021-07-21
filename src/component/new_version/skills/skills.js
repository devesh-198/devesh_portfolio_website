import React from 'react';

import classes from './skills.module.css';

const NewSkills = () => {

    const technologiesArray = ['Javascript.', 'React.', 'HTML.', 'CSS.', 'Firebase.', 'Material UI.', 'Heroku.']

    let i = 0
    let j = 0
    let k = 0

    document.addEventListener("DOMContentLoaded" , event => {
        let interval = setInterval(() => {changeInnerHtml()}, 100)
        
        const changeInnerHtml = () => {
            if (k === 21) {
                k = 0
                clearInterval(interval)
                setTimeout(() => {
                    interval = setInterval(() => {changeInnerHtml()}, 100)
                }, 3000);
                
                document.getElementById("technologies").innerHTML = technologiesArray[j]
                j++
                j === 7 && (j = 0)
            }else {
                i === 7 && (i = 0)
                document.getElementById("technologies").innerHTML = technologiesArray[i]
                i++;
                k++;
            }
        }
    })

    return (
        <div className={classes.skills}>
            <p>I build great applications with</p>
            <p id="technologies"></p>
        </div>
    )
}

export default NewSkills;