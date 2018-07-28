import React from "react"
import PropTypes from "prop-types"
import "react-bootstrap"

class FriendRequestList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <div className="friend-request-full-list">
          <span>testing</span>
        </div>
      </React.Fragment>
    )
  }
}

export default FriendRequestList
