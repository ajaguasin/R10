import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  address: {
    ...globalStyles.globalFonts,
    color: globalStyles.red.color,
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default styles;
