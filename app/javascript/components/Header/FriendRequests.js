import React from "react"
import PropTypes from "prop-types"
class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <span className="friend-requests">F</span>
      </React.Fragment>
    );
  }
}

export default FriendRequests
