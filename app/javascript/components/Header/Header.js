import React from "react"
import PropTypes from "prop-types"
import Context from './Context'
import Logo from './Logo'
import FriendRequests from './FriendRequests'
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <div className="header">
          <Logo />
          {/*Title: {this.props.title} */}
          {/* 
            Please make the context menu change dynamically based on user status (logged in or logged out)
            https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap
          */}
          <FriendRequests />
          <Context />
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header
