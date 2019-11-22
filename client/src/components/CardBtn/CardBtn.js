import React from "react";
import Button from "@material-ui/core/Button"
import "./CardBtn.css";


const CardBtn = props => (
  <Button
  variant="contained" 
  color="secondary" 
  onClick={props.onClick}
  className = {props["data-value"]}  
  {...props}
  />

  // <button
  //   onClick={props.onClick}
  //   className={`card-btn ${props["data-value"]}`}
  //   {...props}
  // />
);

export default CardBtn;
