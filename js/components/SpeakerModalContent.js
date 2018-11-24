import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity } from "react-native";

const SpeakerModalContent = props => {
  return (
    <View
      style={{ backgroundColor: "white", justifyContent: "center", flex: 1 }}
    >
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: props.img }}
      />

      <Text>{props.bio}</Text>
      <TouchableOpacity title={"Read More on Wikipedia"} />
    </View>
  );
};

SpeakerModalContent.propTypes = {};

export default SpeakerModalContent;
