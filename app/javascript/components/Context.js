import React from "react"
import PropTypes from "prop-types"
class Context extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        Menu
      </React.Fragment>
    );
  }
}

export default Context
