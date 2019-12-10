import React from "react";
import {Typography, Link, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Triangle on Tap
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

export default function Footer() {
    
    const classes = useStyles();

    return(
    <Grid container alignItems="center" justify="center" >
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Triangle On Tap
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Connect to your local triangle breweries
        </Typography>
        <Copyright />
    </footer>
    </Grid>
    )
}

