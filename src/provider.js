import React, { createContext, Component } from "react";
import hero from "./hero";

const DEFAULT_STATE = {
    allChar: hero,
    searchTerm: '',
  };

export const context = new createContext(DEFAULT_STATE);

class Provider extends Component {
    state = DEFAULT_STATE

    searchTermChanged = searchTerm => {
        this.setState({searchTerm});
      };

    render(){
        return(
            <context.Provider value={{...this.state, searchTermChanged: this.searchTermChanged,}} >
                {this.props.children}
            </context.Provider>
        )
    }
}

export default Provider
