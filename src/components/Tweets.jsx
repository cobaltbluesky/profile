import React from 'react';
import Header from './Header';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Tweets=()=>(
  <div>
    <Header/>
    <TwitterTimelineEmbed  sourceType='profile'screenName='chuni_character'/>
  </div>
)
export default Tweets;
