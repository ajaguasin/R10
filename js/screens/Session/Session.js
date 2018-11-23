import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Button } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicon from "react-native-vector-icons/Ionicons";
const Session = props => {
  const isFave = props.faveIds.find(fave => fave === props.session.id);
  return (
    <View style={styles.container}>
      <View style={styles.speaker}>
        <View style={styles.top}>
          <Text style={styles.location}>{props.session.location}</Text>
          {isFave && <Ionicon name={"ios-heart"} style={styles.fave} />}
        </View>
        <Text style={styles.title}>{props.session.title}</Text>
        <Text style={styles.time}>
          {moment(props.session.startTime)
            .format("h:mm a")
            .toUpperCase()}
        </Text>
        <Text style={styles.description}>{props.session.description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: props.session.speaker.image }}
          />
          <Text style={styles.name}>{props.session.speaker.name}</Text>
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
                    removeFave(props.session.id);
                  }}
                />
              ) : (
                <Button
                  style={styles.button}
                  title={"Add to Faves"}
                  onPress={() => {
                    addFave(props.session.id);
                  }}
                />
              )}
            </React.Fragment>
          )}
        </FavesContext.Consumer>
      </View>
    </View>
  );
};

Session.propTypes = {};

export default Session;
