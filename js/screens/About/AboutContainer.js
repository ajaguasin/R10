import React, { Component } from "react";
import PropTypes from "prop-types";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { TouchableOpacity } from "react-native";
import Loading from "../../components/Loading";
import { navigationType } from "../../lib/types";
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    drawerLabel: "Menu",
    drawerIcon: () => {
      <TouchableOpacity>
        <Ionicons name={"menu"} size={20} color={"white"} />
      </TouchableOpacity>;
    }
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
          if (loading) return <Loading />;
          if (error) return console.log(error);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

AboutContainer.propType = {
  navigation: navigationType.isRequired
};

export default AboutContainer;
