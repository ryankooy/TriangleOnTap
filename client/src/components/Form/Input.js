import React from "react";
import TextField from "@material-ui/core/TextField";




export const Input = props => (
  <form>
      <TextField 
      id="standard-basic"
      fullWidth
      {...props}
      margin="normal"
      rows="6"
      // variant="outlined"
      sm={6}
      />
  </form>
  // <div className="form-group">
  //   <input className="form-control" {...props} />
  // </div>
);
