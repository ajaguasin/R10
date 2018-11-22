import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  center: {
    alignItems: "center",
    borderBottomColor: "black"
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Montserrat",

    fontSize: 20
  },
  conductTitle: {
    color: "purple",
    fontFamily: "Montserrat",
    marginTop: 10,
    marginBottom: 10
  },
  conductDescription: {
    fontSize: 16
  }
});

export default styles;
