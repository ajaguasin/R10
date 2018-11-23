import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";

export default class SessionContainer extends Component {
  render(props) {
    const { navigation } = this.props;
    const session = navigation.getParam("session");

    return (
      <FavesContext.Consumer>
        {({ faveIds }) => <Session session={session} faveIds={faveIds} />}
      </FavesContext.Consumer>
    );
  }
}
