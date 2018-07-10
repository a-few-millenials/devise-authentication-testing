import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};
export default Header
