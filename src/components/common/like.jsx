import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
  let icon = "fa-heart fa-";
  props.liked ? (icon += "solid") : (icon += "regular");
  return (
    <FontAwesomeIcon
      onClick={props.onClick}
      icon={icon}
      className="clickable"
    />
  );
};

export default Like;
