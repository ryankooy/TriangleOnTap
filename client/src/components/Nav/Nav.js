import React, { Fragment } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, Button, IconButton, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const newStyle = {
  color: 'black',
  fontFamily: "Fjalla One",
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(7),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

}));

function ListItemLink(props) {
  return <ListItem className={newStyle} button component="a" {...props} />;
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
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
    <AppBar>
      <Toolbar>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
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
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography>Triangle On Tap</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItemLink onClick={handleDrawerClose} href="/">
            <ListItemText>Home</ListItemText>
            </ListItemLink>
            <ListItemLink onClick={handleDrawerClose} href="/favorites">
            <ListItemText>Favorites</ListItemText>
            </ListItemLink>
            <ListItemLink onClick={handleDrawerClose} href="/myprofile">
            <ListItemText>My Profile</ListItemText>
            </ListItemLink>
            <ListItemLink onClick={props.logout} href="#">
            <ListItemText>Logout</ListItemText>
            </ListItemLink>
        </List>
        <Divider />
      </Drawer>
    </div>
  )
};

export default Nav;