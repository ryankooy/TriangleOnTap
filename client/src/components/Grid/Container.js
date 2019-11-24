import React from "react";
import Grid from '@material-ui/core/Grid';

export const Container = ({children}) => (
  <Grid container>
    {children}
  </Grid>
);


 
// export const Container = ({ fluid, children }) => (
//   <div className={`container${fluid ? "-fluid" : ""}`}>
//     {children}
//   </div>
// );
