import React from "react"
import PropTypes from "prop-types"
import Logo from 'C:/Users/adria/Pictures/Logo.gif'
class Logo extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <img src={Logo} />
      </React.Fragment>
    );
  }
}

export default Logo
