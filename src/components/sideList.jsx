import React from 'react';
import {List,ListItem,ListItemText}from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});


const sideList=()=>{

  const classes=useStyles;

  return(
    <div
      className={classes.list}
    >
      <List>
        <ListItem button>
          <ListItemText primary={"HOME"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"AboutMe"}/>
        </ListItem>
      </List>
    </div>
  )
}

export default sideList;
