import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import MapScreen from "../screens/Map";
import SessionScreen from "../screens/Session";
import SpeakerScreen from "../components/Speaker";
import { white } from "ansi-colors";
import { sharedNavigationOptions } from "./config";
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen,
    Speaker: SpeakerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen,
    Speaker: SpeakerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Faves") {
          Platform.OS === "ios"
            ? (iconName = `ios-heart`)
            : Platform.Version === 27
            ? (iconName = `md-heart`)
            : false;
        } else if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      labelStyle: { fontSize: 10, fontFamily: "Montserrat-Regular" },
      style: { backgroundColor: "black" }
    }
  }
);
