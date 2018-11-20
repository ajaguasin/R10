import React, { Component } from "react";
import PropTypes from "prop-types";
import About from "./About";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
// import client from "../../config/api";
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    // <Query
    //   query={gql`
    //     {
    //       Conduct(id: 0, order: 0) {
    //         description
    //         id
    //         order
    //         title
    //       }
    //     }
    //   `}
    // >
    //   {({ loading, error, data }) => {
    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error :(</p>;
    //     return <About data={data} />;
    //   }}
    // </Query>;
    return <About />;
  }
}

export default AboutContainer;
