import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default (Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
