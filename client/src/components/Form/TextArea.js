import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextArea = props => (
  <form>
  <TextField
    id="outlined-multiline-flexible"
    variant="outlined"
    margin="normal"
    fullWidth
    styles={{height: "100%"}}
    rows="20"
    {...props}
  />
  </form>
  // <div className="form-group">
  //   <textarea className="form-control" rows="20" {...props} />
  // </div>
);
