import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicon from "react-native-vector-icons/Ionicons";
import { sessionType, navigationType, faveIdsType } from "../../lib/types";
const Session = props => {
  const isFave = props.faveIds.find(fave => fave === props.session.id);
  return (
    <ScrollView style={styles.container}>
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
        <View>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              props.navigation.navigate("Speaker", {
                speaker: props.session.speaker
              });
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: props.session.speaker.image }}
            />
            <Text style={styles.name}>{props.session.speaker.name}</Text>
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
                      removeFave(props.session.id);
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
                      addFave(props.session.id);
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
    </ScrollView>
  );
};

Session.propTypes = {
  session: sessionType.isRequired,
  navigation: navigationType.isRequired,
  faveIds: faveIdsType.isRequired
};

export default Session;
