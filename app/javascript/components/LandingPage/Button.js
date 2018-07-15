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
        <a href={this.props.Link} id={this.props.Class}>
          <div className={this.props.Class} href={this.props.Link}>
            {this.props.Title}
          </div>
       </a>
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
