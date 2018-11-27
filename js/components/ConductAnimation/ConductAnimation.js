import React, { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default class ConductAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      height: new Animated.Value(0),
      hidden: true
    };
  }

  expandAnimation() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.state.height, {
        toValue: 270,
        duration: 1000
      })
    ]).start();
  }
  collapseAnimation() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(this.state.height, {
        toValue: 0,
        duration: 1000
      })
    ]).start();
  }

  render() {
    return (
      <View>
        <View style={styles.titleRow}>
          {this.state.hidden ? (
            <Ionicon
              style={styles.addIcon}
              name={"ios-add"}
              onPress={() => {
                this.expandAnimation();
                this.setState({ hidden: !this.state.hidden });
              }}
            />
          ) : (
            <Ionicon
              style={styles.addIcon}
              name={"ios-remove"}
              onPress={() => {
                this.collapseAnimation();
                this.setState({ hidden: !this.state.hidden });
              }}
            />
          )}
          <Text style={styles.conductTitle}>{this.props.conductTitle}</Text>
        </View>
        <Animated.View
          style={{ opacity: this.state.opacity, height: this.state.height }}
        >
          <Text>{this.props.conductDesc}</Text>
        </Animated.View>
      </View>
    );
  }
}

ConductAnimation.propTypes = {
  conductDesc: PropTypes.string.isRequired,
  conductTitle: PropTypes.string.isRequired
};
