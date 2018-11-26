import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#8797D6", "#9963ea"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          style={styles.readMore}
          onPress={() => Linking.openURL(props.url)}
        >
          <Text style={styles.readMoreText}>Read More on Wikipedia</Text>
        </TouchableOpacity>
      </LinearGradient>
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
    lineHeight: 19
  },
  linearGradient: {
    borderRadius: 20,
    marginTop: 10,
    alignSelf: "center"
  },
  readMore: {
    padding: 12
  },
  readMoreText: {
    color: "white"
  }
});

SpeakerModalContent.propTypes = {
  bio: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SpeakerModalContent;
