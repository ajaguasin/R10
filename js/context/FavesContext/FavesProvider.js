import React, { Component } from "react";
import realm from "../../config/models";
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  addFave = id => {
    try {
      realm.write(() => {
        let date = Date.now();
        realm.create("Fave", { id: id, fave_on: new Date(date) });
        this.refreshStateIds();
      });
    } catch (e) {
      console.log("Error on creation");
    }
  };

  removeFave = id => {
    try {
      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey("Fave", id));
        this.refreshStateIds();
      });
    } catch (e) {
      console.log("Error on deletion");
    }
  };

  allFaves = () => {
    let faves = realm.objects("Fave").map(p => p.id);
    return faves;
  };

  refreshStateIds = () => {
    this.setState({ faveIds: this.allFaves() });
  };

  componentDidMount() {
    let ids = this.allFaves();
    this.setState({ faveIds: [...ids] });
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          allFaves: this.allFaves,
          removeFave: this.removeFave,
          addFave: this.addFave
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
