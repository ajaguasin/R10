import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import moment from "moment";
function Schedule(props) {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        renderItem={({ item, index, section }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Session", { session: item });
            }}
          >
            <View style={styles.sectionItems} key={index}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>
            {moment(section.title).format("h:mm a")}
          </Text>
        )}
        sections={props.data}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

Schedule.propTypes = {};

export default Schedule;
