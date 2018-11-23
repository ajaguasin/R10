import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Button } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Session = props => {
  return (
    <View style={styles.container}>
      <View style={styles.speaker}>
        <Text style={styles.location}>{props.session.location}</Text>
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
        <Button
          style={styles.button}
          title={false ? "Remove" : "Add"}
          onPress={() => {
            console.log("hi");
          }}
        />
      </View>
    </View>
  );
};

Session.propTypes = {};

export default Session;
