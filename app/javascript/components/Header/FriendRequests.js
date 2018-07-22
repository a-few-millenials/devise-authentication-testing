import React from "react"
import PropTypes from "prop-types"
class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false;
    }
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
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
