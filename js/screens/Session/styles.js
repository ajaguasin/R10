import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  speaker: {
    borderBottomColor: globalStyles.lightGrey.color,
    borderBottomWidth: 1
  },
  location: {
    ...globalStyles.globalFonts,
    ...globalStyles.mediumGrey,
    paddingTop: 10
  },
  fave: {
    ...globalStyles.red,
    paddingTop: 10
  },
  time: {
    ...globalStyles.red,
    fontWeight: "bold",
    paddingTop: 10
  },
  title: {
    ...globalStyles.globalFonts,
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 10
  },
  description: {
    ...globalStyles.globalFonts,
    fontWeight: "100",
    fontSize: 18,
    lineHeight: 25,
    paddingTop: 10
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingTop: 10
  },
  name: {
    ...globalStyles.globalFonts,

    fontWeight: "bold"
  },
  button: {
    backgroundColor: "transparent",
    padding: 12
  },
  buttonText: {
    ...globalStyles.globalFonts,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  modalContainer: {
    backgroundColor: "black",
    flex: 1,
    padding: 10
  },
  modalHeader: {
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  modalHeaderText: {
    ...globalStyles.globalFonts,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  modalIcon: {
    fontSize: 24,
    position: "absolute",
    left: 0
  },
  linearGradient: {
    borderRadius: 20,
    marginTop: 10,
    alignSelf: "center"
  }
});

export default styles;
