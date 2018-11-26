import React, { Component } from "react";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";
import { navigationType } from "../../lib/types";
import FavesContainer from "../Faves/FavesContainer";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    const { navigation } = this.props;
    const session = navigation.getParam("session");

    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Session
            session={session}
            faveIds={faveIds}
            navigation={navigation}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

FavesContainer.propTypes = {
  navigation: navigationType.isRequired
};
