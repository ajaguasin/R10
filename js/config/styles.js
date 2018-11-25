import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  globalFonts: {
    ...Platform.select({
      ios: {
        fontFamily: "Montserrat-Light"
      },
      android: {
        fontFamily: "Montserrat-Regular"
      }
    })
  },
  mediumGrey: { color: "#999999" },
  lightGrey: { color: "#e6e6e6" },
  blue: { color: "#8797D6" },
  purple: { color: "#9963ea" },
  red: { color: "#cf392a" }
});

export default styles;
