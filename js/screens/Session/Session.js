import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  ScrollView
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicon from "react-native-vector-icons/Ionicons";
import SpeakerModalContent from "../../components/SpeakerModalContent";
import { sessionType, navigationType, faveIdsType } from "../../lib/types";
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
      <ScrollView style={styles.container}>
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
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#8797D6", "#9963ea"]}
                    style={styles.linearGradient}
                  >
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        removeFave(this.props.session.id);
                      }}
                    >
                      <Text style={styles.buttonText}>Remove from Faves</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                ) : (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#8797D6", "#9963ea"]}
                    style={styles.linearGradient}
                  >
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        addFave(this.props.session.id);
                      }}
                    >
                      <Text style={styles.buttonText}> Add to Faves</Text>
                    </TouchableOpacity>
                  </LinearGradient>
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
          <ScrollView style={styles.modalContainer}>
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
          </ScrollView>
        </Modal>
      </ScrollView>
    );
  }
}

Session.propTypes = {
  session: sessionType.isRequired,
  navigation: navigationType.isRequired,
  faveIds: faveIdsType.isRequired
};

export default Session;
