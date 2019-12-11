import React from "react";
import {Card, Typography, CardHeader, CardContent} from '@material-ui/core';


export const Cards = (props) => (
  <Card>
    <CardHeader
    title={props.title}
    />
    <CardContent>
      <Typography component="div"  color="primary">
        {props.children}
      </Typography>
    </CardContent>
  </Card>
);
