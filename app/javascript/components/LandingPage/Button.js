import React from "react"
import PropTypes from "prop-types"
class Button extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
        Link: {this.props.link}
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};
export default Button
