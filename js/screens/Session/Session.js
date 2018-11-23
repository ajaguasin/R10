import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Button } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicon from "react-native-vector-icons/Ionicons";
const Session = props => {
  return (
    <View style={styles.container}>
      <View style={styles.speaker}>
        <View>
          <Text style={styles.location}>{props.session.location}</Text>
          {props.faveIds.map(fave => fave.id === props.session.id).length >
            0 && <Ionicon name={"ios-heart"} style={styles.fave} />}
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
          {({ addFave, removeFave, allFaves, faveIds }) => (
            <React.Fragment>
              <Button
                style={styles.button}
                title={false ? "Remove" : "Add"}
                onPress={() => {
                  faveIds.filter(fave => fave !== props.session.id).length >
                    1 && addFave(props.session.id);
                }}
              />
              <Button
                style={styles.button}
                title={"Show Faves"}
                onPress={() => {
                  console.log(allFaves());
                }}
              />
            </React.Fragment>
          )}
        </FavesContext.Consumer>
      </View>
    </View>
  );
};

Session.propTypes = {};

export default Session;
