import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="header">
          {/*Title: {this.props.title} */}
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};
export default Header
