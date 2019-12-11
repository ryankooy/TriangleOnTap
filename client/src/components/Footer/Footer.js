import React from "react";
import PropTypes from 'prop-types';
import {Typography, Link, Grid, AppBar, Toolbar, Slide, CssBaseline, useScrollTrigger} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const newStyle = {
  color: '#ffffff',
}

const Copyright = () => {
    return (
      <Typography style={newStyle} variant="body2" align="center">
        {'Copyright © '}
        <Link style={newStyle} href="/">
          Triangle on Tap
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const HideOnScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="up" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.secondary,
        padding: theme.spacing(6),
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      marginTop: theme.spacing(6),
    },
    grow: {
      flexGrow: 1,
    },
}));

export default function Footer(props) {
    
    const classes = useStyles();

    return(

      // <footer className={classes.appBar} position="fixed">
      // <Typography variant="h6" align="center" gutterBottom>
      //   Triangle On Tap
      // </Typography>
      // <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      //   Connect to your local triangle breweries
      // </Typography>
      // <Copyright />
      // </footer>
      // <React.Fragment>
      // <CssBaseline />
      <footer className={classes.footer}>
      <HideOnScroll {...props}>
      <AppBar color="secondary" className={classes.appBar}>
      <Toolbar>
        {/* <div className={classes.grow} /> */}
        <Grid container alignItems="center" justify="center">
        <Copyright />
        </Grid>
      </Toolbar>
    </AppBar>
    </HideOnScroll>
    {/* </React.Fragment> */}
    </footer>
    )
}

