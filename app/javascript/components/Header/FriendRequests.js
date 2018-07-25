import React from "react"
import PropTypes from "prop-types"
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap"
class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      active: false
    }
  }

  render () {
    return (
      <React.Fragment>
        <div onClick={this.handleClick} ref={this.setWrapperRef}>
          {this.props.children}
          <span className="friend-requests">F</span>
          <div className={this.state.active ? 'friend-requests-full': 'friend-requests-none'}>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendRequests
