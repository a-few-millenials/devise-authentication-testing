import React from "react"
import PropTypes from "prop-types"
class DropdownMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <ul className="dropdown-list-list">
          <li className="dropdown-entry"><a href="#">Account Settings</a></li>
          <li className="dropdown-entry"><a href="/users/sign_out">Log Out</a></li>
        </ul>
      </React.Fragment>
    );
  }
}

export default DropdownMenu
