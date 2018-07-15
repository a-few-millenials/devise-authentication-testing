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
        <div className={this.props.Class}>
          <a href={this.props.Link}>{this.props.Title}</a> 
        </div>
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  Title: PropTypes.string,
  Link: PropTypes.string,
  Class: PropTypes.string
};
export default Button
