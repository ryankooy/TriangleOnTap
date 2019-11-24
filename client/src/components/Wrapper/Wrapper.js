import React from "react";
import Paper from "@material-ui/core/Paper";



function Wrapper(props) {
    
    return (
        <Paper style= {{padding: 20, marginTop: 10, marginBottom: 10}}>
          {props.children}
        </Paper>
    )
}

export default Wrapper;