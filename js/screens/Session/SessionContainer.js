import React, { Component } from "react";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";
import { navigationType } from "../../lib/types";
import FavesContainer from "../Faves/FavesContainer";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Platform, TouchableOpacity } from "react-native";

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
  }
  static navigationOptions = {
    title: "Session",
    headerLeft: () => {
      let iconName = "";
      Platform.OS === "ios"
        ? (iconName = "ios-arrow-back")
        : Platform.Version === "27"
        ? (iconName = "md-arrow-back")
        : "arrow-back";
      return (
        <TouchableOpacity
          onPress={() => {
            this.navigation.goBack();
          }}
        >
          <Ionicon
            style={{ marginLeft: 15, fontSize: 16, fontWeight: "bold" }}
            name={iconName}
          />
        </TouchableOpacity>
      );
    }
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
