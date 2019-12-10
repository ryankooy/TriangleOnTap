import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const newStyle = {
  color: 'black',
  fontFamily: "Fjalla One",
}

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }
  
  return (
    <div className={classes.root}>
    <AppBar>
      <Toolbar>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleMenuClick}
        />
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}><Link style = {newStyle} to = "/favorites" >My Favorite</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link style = {newStyle} to = "/myprofile">My Profile</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link to="#" style = {newStyle}className="logout" onClick={props.logout}>Logout</Link></MenuItem>
      </Menu>
      </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link style={newStyle} to = "/">Triangle On Tap</Link>
        </Typography>
        <Typography className={classes.menuButton}>
        {greeting}
        </Typography>
          <Button color="inherit" spacing={25}><Link to="#" className="logout" style = {newStyle} onClick={props.logout}>Logout</Link></Button>       
      </Toolbar>
    </AppBar>
    </div>
  )
};

export default Nav;