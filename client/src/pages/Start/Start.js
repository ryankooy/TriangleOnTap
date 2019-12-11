import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, CssBaseline } from '@material-ui/core';
import "./Start.css";
import "../../assets/images/brew.jpeg";


const newStyle = {
    color: 'white',
    fontFamily: "Fjalla One",
    background: "#7D3F20",
  }

const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(../../assets/images/brew.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    button: {
        margin: theme.spacing(3, 1),
    }
}))
  
const Start = () => {
    const classes = useStyle();

    return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={5} className={classes.image} />
    <Grid 
    item
    direction="column"
    alignItems="center"
    justify="center"
    style={{
        // minHeight: '100vh',
        position: 'relative', 
        left: '2%', 
        top: '60%',
        transform: 'translate(-50%, -50%)'
        }}
    >
        <Grid item xs>
        <Typography variant="h2" component="h2" color="primary">
            Triangle On Tap
        </Typography>
        <Button className={classes.button} variant="contained" style={newStyle} space={8}><Link to = "/login" style={newStyle} >Login</Link></Button> 
        <Button className={classes.button} variant="contained" style={newStyle} space={8}><Link to = "/signup" style={newStyle}>Sign Up</Link></Button>
        </Grid>
    </Grid>
            
    </Grid>
        
    )
}

export default Start;