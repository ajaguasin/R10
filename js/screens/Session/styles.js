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
    ...globalStyles.mediumGrey
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
  }
});

export default styles;
