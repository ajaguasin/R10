import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

class SpeakerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisable: false
    };
  }
  render() {
    console.log(this.state.isVisable);
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isVisable}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({ isVisable: !this.state.isVisable });
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setState({ isVisable: !this.state.isVisable });
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SpeakerModal.propTypes = {};

export default SpeakerModal;
