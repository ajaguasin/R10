import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
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
    justifyContent: "center",
    flex: 1
  },
  modalHeaderText: {
    ...globalStyles.globalFonts,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  modalIcon: {
    fontSize: 24
  },
  linearGradient: {
    borderRadius: 20,
    marginTop: 10,
    alignSelf: "center"
  }
});

export default styles;
