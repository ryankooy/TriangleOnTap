import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Grid, Card, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
     
      cardContent: {
        flexGrow: 1,
      }
}));

const newStyle = {
    color: '#7D3F20',
  }

const FavoriteCards = (props) => {
    const classes = useStyles();
    console.log(props.breweries)
    const [open] = useState(true);
    const [breweries] = useState([])
    return (

        <Grid container spacing={8}> 
        {props.breweries.map(brew =>    
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card} key={brew._id}>       
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {brew.name}
            </Typography>
            <Typography>
                Address and Contact Information  
                <br></br>
                {`${brew.street}, ${brew.city}`}
                <br></br>
                {brew.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary">
                <Link to={brew.website_url} style={newStyle}>Website</Link>
            </Button>
            <Button size="small" color="primary" data-id={brew._id} onClick={() => props.handleDelete(brew._id)}>
                Delete
            </Button>
            </CardActions>
        </Card>
        </Grid>
        )}
        </Grid>
    )
}


export default FavoriteCards;