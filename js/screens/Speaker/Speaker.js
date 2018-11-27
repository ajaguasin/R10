import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import SpeakerModalContent from "../../components/SpeakerModalContent/SpeakerModalContent";
import { navigationType, speakerType } from "../../lib/types";
const Speaker = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={true}
      onRequestClose={() => {}}
    >
      <ScrollView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Ionicon style={styles.modalIcon} color="white" name="ios-close" />
          </TouchableHighlight>
          <Text style={styles.modalHeaderText}>About the Speaker</Text>
        </View>
        <SpeakerModalContent
          name={props.speaker.name}
          img={props.speaker.image}
          bio={props.speaker.bio}
          url={props.speaker.url}
        />
      </ScrollView>
    </Modal>
  );
};

Speaker.propTypes = {
  speaker: speakerType.isRequired,
  navigation: navigationType.isRequired
};

export default Speaker;
