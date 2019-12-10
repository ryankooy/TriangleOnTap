import React from "react";
import Button from "@material-ui/core/Button";

export const FormBtn = props => (
  <Button {...props} style={{ float: "right", marginBottom: 10 }} variant="outlined" color="primary">
    {props.children}
  </Button>

  
  // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
  //   {props.children}
  // </button>
);
