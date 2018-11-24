import React, { Component } from "react";
import PropTypes from "prop-types";
import Faves from "./Faves";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";

const query = gql`
  query filterSessions($filter: SessionFilter) {
    allSessions(filter: $filter) {
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
`;
export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
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

  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <React.Fragment>
            <Query
              query={query}
              variables={{
                filter: {
                  id_in: faveIds
                }
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return <Loading />;
                return (
                  <Faves
                    favorites={this.formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                  />
                );
              }}
            </Query>
          </React.Fragment>
        )}
      </FavesContext.Consumer>
    );
  }
}
