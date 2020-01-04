import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {List,ListItem,IconButton} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function SwipableDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer=(open)=>event=>setState({'left':open });

  const sideList=()=>(
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
    >
      <List>
          <ListItem button>
            <ListItemText primary={"HOME"} />
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
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
