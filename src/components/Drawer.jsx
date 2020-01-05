import React from 'react';
import {withRouter} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {List,ListItem,IconButton} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  paper:{
    background:'#4c6cb3'
  }
});

const Drawer=(props)=>{
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer=(open)=>event=>setState({'left':open });

  const handleToHOME=()=>{
    props.history.push('./');
  }
  const handleToAboutMe=()=>{
    props.history.push('/AboutMe');
  }

  const sideList=()=>(
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={handleToHOME}>
          <ListItemText>HOME</ListItemText>
        </ListItem>
        <ListItem button onClick={handleToAboutMe}>
          <ListItemText>AboutMe</ListItemText>
        </ListItem>
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
