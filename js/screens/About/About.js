import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
const About = props => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 180, height: 44 }}
        source={require("../../assets/images/r10_logo.png")}
      />
    </View>
  );
};

About.propTypes = {};

export default About;
