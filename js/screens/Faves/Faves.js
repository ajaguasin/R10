import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableHighlight
} from "react-native";
import globalStyles from "../../config/styles";
import moment from "moment";
import styles from "../Schedule/styles";
import Ionicon from "react-native-vector-icons/Ionicons";

const Faves = props => {
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
              <View style={styles.locationView}>
                <Text style={styles.itemLocation}>{item.location}</Text>
                {props.faveIds.find(fave => fave === item.id) && (
                  <Ionicon name={"ios-heart"} color={globalStyles.red.color} />
                )}
              </View>
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
        sections={props.favorites}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

Faves.propTypes = {};

export default Faves;
