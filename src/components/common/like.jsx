import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = ({ liked, onClick }) => {
  let icon = "fa-heart fa-";
  liked ? (icon += "solid") : (icon += "regular");
  return (
    <FontAwesomeIcon onClick={onClick} icon={icon} className="clickable" />
  );
};

export default Like;
