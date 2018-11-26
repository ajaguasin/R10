import React, { Component } from "react";
import { Text, View, Image, ScrollView, Animated, Easing } from "react-native";
import { allConductsType } from "../../lib/types";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
      rotation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 5000,
        easing: Easing.elastic(0.4)
      }),
      Animated.timing(this.state.rotation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.elastic(0.4)
      })
    ]).start(() => {
      // this.setState({
      //   opacity: new Animated.Value(0),
      //   rotation: new Animated.Value(0)
      // });
    });
  };

  render() {
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
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
            <View key={index}>
              <View style={styles.titleRow}>
                <Animated.View
                  style={{
                    positition: "fixed",
                    opacity: this.state.opacity,
                    transform: [{ rotate: spin }]
                  }}
                >
                  <Ionicon
                    style={styles.addIcon}
                    name={"ios-add"}
                    onPress={event => {
                      this.startAnimation();
                      console.log(event);
                    }}
                  />
                </Animated.View>
                <Text style={styles.conductTitle}>{item.title}</Text>
              </View>
              <Text style={styles.conductDescription}>{item.description}</Text>
            </View>
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
