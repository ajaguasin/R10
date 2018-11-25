import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import globalStyles from "../config/styles";
const SpeakerModalContent = props => {
  return (
    <View style={styles.content}>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: props.img }}
      />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.bio}>{props.bio}</Text>
      <TouchableOpacity title={"Read More on Wikipedia"} />
    </View>
  );
};

SpeakerModalContent.propTypes = {};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 5
  },
  name: {
    ...globalStyles.globalFonts,
    fontWeight: "bold",
    fontSize: 24,
    padding: 10
  },
  bio: {
    ...globalStyles.globalFonts,
    padding: 10,
    lineHeight: 23
  }
});

export default SpeakerModalContent;
