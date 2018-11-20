import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return <Schedule />;
  }
}
