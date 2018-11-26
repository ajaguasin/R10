import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "transparent", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent",
    fontFamily: "Montserrat",
    color: "white"
  },
  headerLeft: () =>
    Platform.Version === 27 && (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons
          style={{ marginLeft: 10 }}
          name={"md-menu"}
          size={20}
          color={"white"}
        />
      </TouchableOpacity>
    )
});
