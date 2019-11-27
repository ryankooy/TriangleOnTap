import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Collapse, ListItemText, Typography} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  
}));

const BrewLists = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {props.breweries.map(brew => {
          <div>
            <ListItemText primary={brew.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemText>
      <Collapse in={open} timeout="auto" unmountOnExit>      
      <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemText 
            primary="Contact Info" 
            secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    >
                    {`Address: ${brew.street}, ${brew.city}, ${brew.state} ${brew.postal_code}`}
                    <br></br>
                    {`Website: ${brew.website_url}`}
                    <br></br>
                    {`Phone: ${brew.phone.match(/\d{3}(?=\d{2,3})|\d+/g).join("-")}`}
                    </Typography>
                </React.Fragment>
               }
               />
             </ListItem>

         </List>
         </Collapse>
          </div>
         
            })}
      </List>


  )
};

export default BrewLists;