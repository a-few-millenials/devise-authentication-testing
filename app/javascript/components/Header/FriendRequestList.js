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
        <ul className="friend-request-full-list">
          
        </ul>
      </React.Fragment>
    )
  }
}

export default FriendRequestList
