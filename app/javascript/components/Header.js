import React from "react"
import PropTypes from "prop-types"
import Context from './Context'
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <div className="header">
          {/*Title: {this.props.title} */}
          <div className="context-menu">
            <Context />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header
