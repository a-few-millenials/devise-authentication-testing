import React from "react"
import PropTypes from "prop-types"
class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <a href={this.props.Link}>{this.props.Title}</a> 
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};
export default Button
