import React, { Component } from "react";
import { Text, View, Image, ScrollView, Animated, Easing } from "react-native";
import { allConductsType } from "../../lib/types";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.constructToggle() };
  }

  constructToggle = () => {
    let keys = this.props.data.allConducts.map((item, index) => item.order);
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = false;
    }
    return obj;
  };

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
          let key = item.order;

          let iconName = "";
          this.state[key] ? (iconName = "ios-remove") : (iconName = "ios-add");
          return (
            <View key={index}>
              <View style={styles.titleRow}>
                <Ionicon
                  style={styles.addIcon}
                  name={iconName}
                  onPress={() => {
                    this.state[key]
                      ? this.setState({ [key]: false })
                      : this.setState({
                          [key]: !this.state.key
                        });
                  }}
                />
                <Text style={styles.conductTitle}>{item.title}</Text>
              </View>

              {this.state[item.order] && (
                <Text key={item.order} style={styles.conductDescription}>
                  {item.description}
                </Text>
              )}
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
