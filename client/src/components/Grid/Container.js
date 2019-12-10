import React from "react";
import Grid from '@material-ui/core/Grid';

const styles = {
  marginTop: 60
}
export const Container = ({children}) => (
  <Grid style={styles} container>
    {children}
  </Grid>
);


 
// export const Container = ({ fluid, children }) => (
//   <div className={`container${fluid ? "-fluid" : ""}`}>
//     {children}
//   </div>
// );
