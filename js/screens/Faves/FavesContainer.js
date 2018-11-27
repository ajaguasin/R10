import React, { Component } from "react";
import Faves from "./Faves";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import { navigationType } from "../../lib/types";
import { formatSessionData } from "../../lib/helpers";
import Loading from "../../components/Loading/Loading";

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
                    data={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
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

FavesContainer.propType = {
  navigation: navigationType.isRequired
};
