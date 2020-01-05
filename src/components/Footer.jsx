import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
const useStyles=makeStyles({
  div:{
    width:'100%',
    textAlign:'center',
    padding:'5px 0',
    position:'absolute',
    bottom:0,
  }
});

const Footer=()=>{
  const classes=useStyles();
  return(
    <small className={classes.div}>
      <Divider/>
      <p>©gunjou</p>
    </small>
  )
}
export default Footer;
