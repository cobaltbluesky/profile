import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles({
  div:{
    width:'100%',
    textAlign:'center',
    padding:'2px 0',
    bottom:0,
    position:'absolute',
  }
});

const Footer=()=>{
  const classes=useStyles();
  return(
    <small className={classes.div}>
      <p>©gunjou</p>
    </small>
  )
}
export default Footer;
