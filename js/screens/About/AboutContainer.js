import React, { Component } from "react";
import PropTypes from "prop-types";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text } from "react-native";
import client from "../../config/api";
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              description
              id
              order
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
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
