import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "react-apollo";
import AppContainer from "./navigation/RootStackNavigator";
import client from "./config/api";
import { FavesProvider } from "./context/FavesContext";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppContainer />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
