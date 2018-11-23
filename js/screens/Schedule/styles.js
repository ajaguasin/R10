import { Platform, StyleSheet } from "react-native";
import globalStyles from "../../config/styles";
const styles = StyleSheet.create({
  sectionItems: {
    padding: 10
  },
  sectionHeader: {
    ...globalStyles.globalFonts,
    backgroundColor: "lightgrey",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  itemTitle: {
    ...globalStyles.globalFonts,

    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 5
  },
  locationView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemLocation: {
    ...globalStyles.globalFonts,

    fontSize: 14,
    color: "grey",
    paddingTop: 5
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#CED0CE"
  }
});

export default styles;
