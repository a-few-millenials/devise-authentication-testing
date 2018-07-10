import React from "react"
import PropTypes from "prop-types"
class SiteHeader extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string
};
export default SiteHeader
