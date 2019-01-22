import React, { Component } from "react";
import {context} from "./provider";

class Consumer extends Component {
    render(){
        const {children} = this.props;
        return (
            <context.Consumer>
                {
                    ({allChar, searchTerm, searchTermChanged}) =>{
                        const char = searchTerm ? allChar.filter(
                            char =>
                              char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
                          )
                          : allChar

                          return React.Children.map(children, child =>
                            React.cloneElement(child, {
                              char,
                              searchTerm,
                              searchTermChanged,
                            })
                          );
                    }
                }
            </context.Consumer>
        )
    }
}
export default Consumer