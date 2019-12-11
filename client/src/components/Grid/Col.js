import React from "react";
import Grid from '@material-ui/core/Grid';

export const Col = ({sm, children}) => (
  <Grid item sm overflow="visible">
    {children}
  </Grid>
);
