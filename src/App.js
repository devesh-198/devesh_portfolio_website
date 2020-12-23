import React from 'react';

import header from './component/header';
import bioData from './component/bioData';
import skills from './component/skills';
import website from './component/website';
import certificate from './component/certificate';
import hobbies from './component/hobbies';
import innerFooter from './component/innerFooter';
import backToTop from './component/footer';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.main}>
      <div className={classes.layout}>
        <a name="top"></a>
        {header}
        {bioData}
        {skills}
        {website}
        {certificate}
        {hobbies}
        {innerFooter}
        {backToTop}
      </div>
    </div>
  )
}

export default App;
