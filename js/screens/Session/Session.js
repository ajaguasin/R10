import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";

const Session = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{props.session.location}</Text>
      <Text style={styles.title}>{props.session.title}</Text>
      <Text style={styles.time}>
        {moment(props.session.startTime).format("h:mm a")}
      </Text>
      <Text>{props.session.description}</Text>
    </View>
  );
};

Session.propTypes = {};

export default Session;
