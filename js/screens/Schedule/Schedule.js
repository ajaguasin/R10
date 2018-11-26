import React from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import globalStyles from "../../config/styles";
import moment from "moment";
import { faveIdsType, navigationType, allSessionType } from "../../lib/types";
const Schedule = props => {
  return (
    <View style={styles.container}>
      {console.log(props)}
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
        sections={props.data}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

Schedule.propTypes = {
  navigation: navigationType.isRequired,
  faveIds: faveIdsType.isRequired,
  data: allSessionType.isRequired
};

export default Schedule;
