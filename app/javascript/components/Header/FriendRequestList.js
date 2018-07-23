import React from "react"
import PropTypes from "prop-types"
class FriendRequestList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <React.Fragment>
        {/*
          Use Ajax to get list of Friend requests from current user

          Put Ajax call into componentWillMount() method and pull array of users that have sent 
          current user a friend request
        */}
      </React.Fragment>
    );
  }
}

export default FriendRequestList
