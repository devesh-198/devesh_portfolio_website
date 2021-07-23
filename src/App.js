import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';

import header from './component/old_version/header';
import bioData from './component/old_version/bioData';
import skills from './component/old_version/skills';
import website from './component/old_version/website';
import certificate from './component/old_version/certificate';
import hobbies from './component/old_version/hobbies';
import innerFooter from './component/old_version/innerFooter';
import backToTop from './component/old_version/footer';
import classes from './App.module.css';

import NewHeader from './component/new_version/header/header';
import about from './component/new_version/about/about';
import NewSkills from './component/new_version/skills/skills';
import Work from './component/new_version/work/work';
import Certificates from './component/new_version/certificates/certificates';
import Footer from './component/new_version/footer/footer';
import Publication from './component/new_version/publication/publication';
import StickyContact from './component/new_version/stickyContact/stickyContact';
// import linkedInBadge from './component/new_version/linkedInBadge';

const App = () => {

  const oldVersion = (
    <div className={classes.main_old}>
      <div className={classes.layout_old}>
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

  const mainPage = (
    <>
      <NewHeader/>
      {about}
      <NewSkills/>
      <Work/>
      <Publication/>
      <Certificates/>
      <Footer/>
      <StickyContact/>
    </>
  )
  
  const route = (
    <BrowserRouter>
      <Switch>
        <Route path="/old_version" exact render={() => oldVersion}/>
        <Route path="/" render={() => mainPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )

  return (
    <>
      {route}
    </>
  )
}

export default App;