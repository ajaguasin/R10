import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  center: {
    alignItems: "center",
    borderBottomColor: "black"
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    ...globalStyles.globalFonts,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    flexDirection: "row"
  },
  addIcon: {
    ...globalStyles.purple,
    marginRight: 10
  },
  conductTitle: {
    ...globalStyles.globalFonts,
    ...globalStyles.purple,
    marginTop: 10,
    marginBottom: 10
  },
  conductDescription: {
    fontSize: 16
  }
});

export default styles;
