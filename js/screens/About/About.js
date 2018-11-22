import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from "react-native";
import styles from "./styles";
const About = props => {
  return (
    <View style={styles.container}>
      {console.log(props)}
      <View style={styles.center}>
        <Image
          style={{ width: 180, height: 44 }}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>
      <Text style={styles.conductDescription}>
        R10 is a conference that focuses on just about any topic related to dev
      </Text>
      <Text style={styles.title}>Date & Revenue</Text>
      <Text style={styles.conductDescription}>
        The R10 Conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      {/* {props.data.data.data.allConducts.map((code, index) => {
        return (
          <React.Fragment>
            <Text style={styles.conductTitle} key={code.order}>
              + {code.title}
            </Text>
            <Text style={styles.textDescription} key={index}>
              {code.description}
            </Text>
          </React.Fragment>
        );  
      })} */}

      <FlatList
        data={props.data.allConducts}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.conductTitle}>{item.title}</Text>
            <Text style={styles.conductDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index + ""}
      />
    </View>
  );
};

About.propTypes = {};

export default About;
