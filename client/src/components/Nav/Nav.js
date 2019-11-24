import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';



const Nav = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.firstName}</strong>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.username} </strong>
			</Fragment>
		)
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(7),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
        <Typography variant="h6" className={classes.title}>
          Triangle On Tap
        </Typography>
        <Typography className={classes.menuButton}>
        {greeting}
        </Typography>
        <Button color="inherit" spacing={25}><Link to="#" className="logout" onClick={props.logout}>Logout</Link></Button>
      </Toolbar>
    </AppBar>
    </div>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <Col size="md-2">
    //     <Link to="/" className="navbar-brand">React Reading List</Link>
    //   </Col>
    //   <Col size="md-7"></Col>
    //   <Col size="md-3">
    //     <div className="float-right">
    //     {greeting} - <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
    //     </div>
    //   </Col>
    // </nav>
  )
};

export default Nav;
