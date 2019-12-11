import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Collapse, ListItemText, Typography, ListSubheader, Divider } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SaveBtn from '../BrewLists/SaveBtn';

const useStyles = makeStyles(theme => ({
  root: {
    width: '94%',
    marginLeft: '6%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));

export default function BrewLists(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Breweries List
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.breweries.map((brew, index) =>
        <div>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={brew.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider variant="inset" component="li" />
          <Collapse in={open} timeout="auto" unmountOnExit key={index}>      
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
                      {`Address: ${brew.street}, ${brew.city}, ${brew.state}`}
                      <br></br>
                      <a href={brew.website_url} target="_blank">{`${brew.website_url}`}</a>
                      <br></br>
                      {"Phone: " + brew.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
                      </Typography>
                    </React.Fragment>
                  } />
                <SaveBtn onClick={props.onClick} dataId={index}/>
              </ListItem>
            </List>
          </Collapse>
        </div>
      )}
    </List>
  );
};
