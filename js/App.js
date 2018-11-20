import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { ApolloProvider } from "react-apollo";
import AppContainer from "./navigation/RootStackNavigator";

import About from "./screens/About/About";

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Hi</Text>
      // </View>
      // <ApolloProvider client={client}>
      <AppContainer />
      // <About />
      // </ApolloProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   }
// });
