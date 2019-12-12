import React from "react";
import { Grid, Link, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import NavigationTwoToneIcon from '@material-ui/icons/NavigationTwoTone';


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
    color: '#d19a30',
  }

const FavoriteCards = (props) => {

    console.log(props);
    
    const classes = useStyles();
    
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
                    <Link href={brew.website_url} target="_blank" style={newStyle}>
                        <Button size="small" color="primary">
                            <NavigationTwoToneIcon />
                            Website
                        </Button>
                    </Link>
                        <Button color="primary" aria-label="delete" onClick={props.onClick} data-id={brew._id}>
                            <DeleteTwoToneIcon />
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )}
        </Grid>
    );
};

export default FavoriteCards;
