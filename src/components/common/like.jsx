import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends Component {
  render() {
    let icon = "fa-heart fa-";
    this.props.liked ? (icon += "solid") : (icon += "regular");
    return <FontAwesomeIcon icon={icon} />;
  }
}

export default Like;
