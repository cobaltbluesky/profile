import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipableDrawer from './Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header=()=>{
  const classes=useStyles();
  return(
    <AppBar position="static">
      <Toolbar>
        <SwipableDrawer/>
        <Typography variant="h6" className={classes.title}>
          準備中
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
