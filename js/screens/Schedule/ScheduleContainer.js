import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text } from "react-native";
export default class ScheduleContainer extends Component {
  formatSessionData = sessions => {
    return sessions
      .reduce((acc, curr) => {
        const timeExists = acc.find(
          section => section.title === curr.startTime
        );
        timeExists
          ? timeExists.data.push(curr)
          : acc.push({ title: curr.startTime, data: [curr] });
        return acc;
      }, [])
      .sort((a, b) => a.title - b.title);
  };

  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              description
              id
              location
              speaker {
                bio
                id
                image
                name
                url
              }
              startTime
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View>
                <Text>Loading</Text>
              </View>
            );
          if (error) return console.log(error);
          return (
            <Schedule
              data={this.formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}
