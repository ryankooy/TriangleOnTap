import React from "react";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const DropDown = props => {
  
  const classes = useStyles();
  
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary={props.children} />
        </ListItem>
      </List>
    </Collapse>
  );
};
