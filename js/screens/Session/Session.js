import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicon from "react-native-vector-icons/Ionicons";
import SpeakerModalContent from "../../components/SpeakerModalContent";
class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  render() {
    const isFave = this.props.faveIds.find(
      fave => fave === this.props.session.id
    );
    return (
      <View style={styles.container}>
        <View style={styles.speaker}>
          <View style={styles.top}>
            <Text style={styles.location}>{this.props.session.location}</Text>
            {isFave && <Ionicon name={"ios-heart"} style={styles.fave} />}
          </View>
          <Text style={styles.title}>{this.props.session.title}</Text>
          <Text style={styles.time}>
            {moment(this.props.session.startTime)
              .format("h:mm a")
              .toUpperCase()}
          </Text>
          <Text style={styles.description}>
            {this.props.session.description}
          </Text>
          <Text style={styles.location}>Presented by:</Text>
          <View>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            >
              <Image
                style={styles.image}
                source={{ uri: this.props.session.speaker.image }}
              />
              <Text style={styles.name}>{this.props.session.speaker.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <FavesContext.Consumer>
            {({ addFave, removeFave }) => (
              <React.Fragment>
                {isFave ? (
                  <Button
                    style={styles.button}
                    title={"Remove from Faves"}
                    onPress={() => {
                      removeFave(this.props.session.id);
                    }}
                  />
                ) : (
                  <Button
                    style={styles.button}
                    title={"Add to Faves"}
                    onPress={() => {
                      addFave(this.props.session.id);
                    }}
                  />
                )}
              </React.Fragment>
            )}
          </FavesContext.Consumer>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {}}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ isVisible: !this.state.isVisible });
                }}
              >
                <Ionicon
                  style={styles.modalIcon}
                  color="white"
                  name="ios-close"
                />
              </TouchableHighlight>
              <Text style={styles.modalHeaderText}>About the Speaker</Text>
            </View>
            <SpeakerModalContent
              name={this.props.session.speaker.name}
              img={this.props.session.speaker.image}
              bio={this.props.session.speaker.bio}
              url={this.props.session.speaker.url}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

Session.propTypes = {};

export default Session;
