import React from "react"
import PropTypes from "prop-types"
class DropdownMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <a href="#">Account Settings</a>
        <a href="#">Log Out</a>
      </React.Fragment>
    );
  }
}

export default DropdownMenu
