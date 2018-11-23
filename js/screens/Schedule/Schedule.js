import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";
import moment from "moment";
function Schedule(props) {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        renderItem={({ item, index, section }) => (
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("Session", { session: item });
            }}
            activeOpacity={0.5}
            underlayColor={globalStyles.lightGrey.color}
          >
            <View style={styles.sectionItems} key={index}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          </TouchableHighlight>
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
