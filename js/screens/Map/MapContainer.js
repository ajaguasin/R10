import React, { Component } from "react";
import PropTypes from "prop-types";
import Map from "./Map";
import { navigationType } from "../../lib/types";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}
MapContainer.propType = {
  navigation: navigationType.isRequired
};

export default MapContainer;
