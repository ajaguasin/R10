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
  title: {
    ...globalStyles.globalFonts,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20
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
