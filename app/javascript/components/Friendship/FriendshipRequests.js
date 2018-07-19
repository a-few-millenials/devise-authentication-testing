import React from "react"
import PropTypes from "prop-types"
class FriendshipRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.list,
    };
  }

  render (props) {
    return (
      <React.Fragment>
        <ul>
          {
            this.state.data.map((user) => 
              <li key={user.email}>
                {user.email}
              </li>
            )
          } 
        </ul>
      </React.Fragment>
    );
  }
}

FriendshipRequests.proptypes = {
  list: PropTypes.array
}

export default FriendshipRequests
