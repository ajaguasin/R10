import React, { Component } from "react";
import Speaker from "./Speaker";
import { navigationType } from "../../lib/types";

export default class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam("speaker");

    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: navigationType.isRequired
};
