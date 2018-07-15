import React from "react"
import PropTypes from "prop-types"
import LogoPicture from 'C:/Users/adria/Pictures/Logo.gif'
class Logo extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <img className="logo" src={LogoPicture} />
      </React.Fragment>
    );
  }
}

export default Logo
