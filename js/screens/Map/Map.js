import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Map = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.address}>
        1490 W Broadway #200, Vancouver, BC V6H 4E8
      </Text>
    </View>
  );
};

export default Map;
