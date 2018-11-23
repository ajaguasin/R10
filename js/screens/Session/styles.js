import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  speaker: {
    borderBottomColor: globalStyles.lightGrey.color,
    borderBottomWidth: 1
  },
  location: {
    ...globalStyles.globalFonts,
    ...globalStyles.mediumGrey,
    flexDirection: "row"
  },
  fave: {
    ...globalStyles.red
  },
  time: {
    ...globalStyles.red,
    fontWeight: "bold"
  },
  title: {
    ...globalStyles.globalFonts,
    fontWeight: "bold",
    fontSize: 24
  },
  description: {
    ...globalStyles.globalFonts,
    fontWeight: "100",
    fontSize: 18,
    lineHeight: 25
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    ...globalStyles.globalFonts,

    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#9963ea"
  }
});

export default styles;
