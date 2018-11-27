import React, { Component } from "react";
import { Text, View, Image, ScrollView, Animated, Easing } from "react-native";
import { allConductsType } from "../../lib/types";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import ConductComponent from "../../components/ConductAnimation/ConductAnimation";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Image
            style={{ width: 180, height: 44 }}
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>
        <Text style={styles.conductDescription}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Revenue</Text>
        <Text style={styles.conductDescription}>
          The R10 Conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>

        {this.props.data.allConducts.map((item, index) => {
          return (
            <ConductComponent
              key={index}
              conductDesc={item.description}
              conductTitle={item.title}
            />
          );
        })}
      </ScrollView>
    );
  }
}

About.propTypes = {
  data: allConductsType.isRequired
};

export default About;
