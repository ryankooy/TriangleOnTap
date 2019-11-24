import React from "react";
import "./List.css";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Collapse, ListItemText } from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

const NestedList = (props) => {
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
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.children} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary={props.children} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
};

export default NestedList;

// export const List = ({ children }) => {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">
//         {children}
//       </ul>
//     </div>
//   );
// };
