import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
const AboutStack = createStackNavigator({
  About: AboutScreen
});
// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator({
  About: AboutStack
});
