import React from 'react';
import {BrowserRouter,Route}from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import AboutThisPage from './AboutThisPage';
import Tweets from './Tweets';
import Contact from './Contact';

const App=()=>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/AboutThisPage'component={AboutThisPage}/>
        <Route path='/AboutMe'component={AboutMe}/>
        <Route path='/Tweets'component={Tweets}/>
        <Route path='/Contact'component={Contact}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
