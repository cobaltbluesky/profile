import React from 'react';
import {withRouter} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import {List,ListItem,IconButton} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  isSelect:{
    backgroundColor:'#bce2e8'
  },
  paper:{
    background:'#4c6cb3'
  },
  button:{
    background:'#4c6cb3',
    '&:hover': {
        backgroundColor:'#67b5b7',
    }
  }
});

const Drawer=(props)=>{
  //URLから現在地を抽出
  let now=props.now;
  let nowpage='';
  let count=0;
  for(let i=0;i<now.length;i++){
    if(count>3)nowpage+=now[i];
    if(now[i]==='/')count++;
  }
  //現在地にtrueを渡す
  let isHomeNow=false;
  let isAboutMeNow=false;
  let isAboutThisPageNow=false;
  let isTweetsNow=false;
  let isContactNow=false;
  if(nowpage==='')isHomeNow=true;
  if(nowpage==='AboutMe')isAboutMeNow=true;
  if(nowpage==='AboutThisPage')isAboutThisPageNow=true;
  if(nowpage==='Tweets')isTweetsNow=true;
  if(nowpage==='Contact')isContactNow=true;

  const classes=useStyles();

  const [state, setState] = React.useState({left: false});

  const toggleDrawer=(open)=>event=>setState({'left':open });

  const handleToHome=()=>{
    props.history.push('./');
  }
  const handleToAboutMe=()=>{
    props.history.push('/AboutMe');
  }
  const handleToAboutThisPage=()=>{
    props.history.push('/AboutThisPage');
  }
  const handleToTweets=()=>{
    props.history.push('/Tweets');
  }
  const handleToContact=()=>{
    props.history.push('/Contact');
  }

  const sideList=()=>(
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem
          onClick={handleToHome}
          className={isHomeNow?classes.isSelect:classes.button}
        >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem
          onClick={handleToAboutThisPage}
          className={isAboutThisPageNow?classes.isSelect:classes.button}
        >
          <ListItemText>AboutThisPage</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem
          onClick={handleToAboutMe}
          className={isAboutMeNow?classes.isSelect:classes.button}
        >
          <ListItemText>AboutMe</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem
          onClick={handleToTweets}
          className={isTweetsNow?classes.isSelect:classes.button}
        >
          <ListItemText>Tweets</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem
          onClick={handleToContact}
          className={isContactNow?classes.isSelect:classes.button}
        >
          <ListItemText>Contact</ListItemText>
        </ListItem>
        <Divider/>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        edge='start'
        color='inherit'
      >
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer(false)}
        classes={{paper:classes.paper}}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

export default withRouter(Drawer);
