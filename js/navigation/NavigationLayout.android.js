import React from "react";
import { Text, View, Dimensions } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import MapScreen from "../screens/Map";
import SessionScreen from "../screens/Session";
import SpeakerScreen from "../screens/Speaker";
import { sharedNavigationOptions } from "./config";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalStyles from "../config/styles";

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

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `md-information-circle`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        }
        return (
          <View style={{ margin: 5, flexDirection: "row" }}>
            <Ionicons name={iconName} size={25} color={tintColor} />
            <Text style={{ marginLeft: 15 }}>{routeName}</Text>
          </View>
        );
      }
    }),
    contentOptions: {
      activeTintColor: globalStyles.purple.color,
      inactiveTintColor: globalStyles.mediumGrey.color
    },
    drawerWidth: Dimensions.get("screen").width / 2
  }
);
