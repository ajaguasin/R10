import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";

export default class SessionContainer extends Component {
  render(props) {
    const { navigation } = this.props;
    const session = navigation.getParam("session");

    return <Session session={session} />;
  }
}
