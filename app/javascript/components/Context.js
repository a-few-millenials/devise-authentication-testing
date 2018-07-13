import React from "react"
import PropTypes from "prop-types"
class Context extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        Testing
      </React.Fragment>
    );
  }
}

export default Context
