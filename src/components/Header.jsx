import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Appbar:{
    backgroundColor:'#414fa3',
    top:0,
    position:'sticky',
  }
}));

const Header=()=>{
  const classes=useStyles();
  return(
    <AppBar position="static"className={classes.Appbar}>
      <Toolbar>
      <Drawer now={window.location.href}/>
        <Typography variant="h6" className={classes.title}>
          gunjou's portfolio(仮)
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
