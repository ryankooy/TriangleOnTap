import React from "react";
import {Card, Typography, CardHeader, CardContent} from '@material-ui/core';


export const Cards = (props) => (
 
  <Card>
    <CardHeader
    title={props.title}
    />
    <CardContent>
      <Typography component="p">
        {props.children}
      </Typography>
    </CardContent>
  </Card>


  // <div className="card">
  //   <div className="card-header bg-primary" style={{color: '#fff'}}>
  //     <h5>{props.title}</h5>
  //   </div>
  //   <div className="card-body">
  //     {props.children}
  //   </div>
  // </div>
);
