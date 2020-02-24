import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#ffff',
  },
  navigation: {
    color: '#ffff',
    paddingLeft: '30px', 
  },
box:{
  float: "right",
}
  
}));

const Header = () =>{
const classes = useStyles();
    return(

<div>

       <AppBar position="static">
        <Toolbar>
        <Box className={classes.box}>
        <Link href="#"  className={classes.navigation}>Link</Link>
        <Link href="#"  className={classes.navigation}>Link</Link>
        <Link href="#"  className={classes.navigation}>Link</Link>
        <Link href="#"  className={classes.navigation}>Link</Link>
        </Box>
        </Toolbar>
      </AppBar>
</div>

    );


}
export default Header;