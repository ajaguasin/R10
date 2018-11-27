import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../../components/Loading/Loading";
import FavesContext from "../../context/FavesContext";
import { navigationType } from "../../lib/types";
import { formatSessionData } from "../../lib/helpers";

export default class ScheduleContainer extends Component {
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
          if (loading) return <Loading />;
          if (error) return console.log(error);
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => (
                <Schedule
                  data={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
                  faveIds={faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

Schedule.propTypes = {
  navigation: navigationType.isRequired
};
