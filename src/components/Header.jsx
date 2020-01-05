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
}));

const Header=()=>{
  const classes=useStyles();
  return(
    <AppBar position="static"style={{backgroundColor:'#414fa3'}}>
      <Toolbar>
        <Drawer/>
        <Typography variant="h6" className={classes.title}>
          gunjou's portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
