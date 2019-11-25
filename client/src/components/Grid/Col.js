import React from "react";
import Grid from '@material-ui/core/Grid';

export const Col = ({sm, children}) => (
  <Grid item sm>
    {children}
  </Grid>
);


// export const Col = ({ size, children }) => (
//   <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
//     {children}
//   </div>
// );
