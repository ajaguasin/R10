import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

function Map(props) {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
    </View>
  );
}

Map.propTypes = {};

export default Map;
