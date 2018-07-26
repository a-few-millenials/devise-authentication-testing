import React from "react"
import PropTypes from "prop-types"
import FriendRequestList from "./FriendRequestList"
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap"
class FriendRequests extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if(!this.wrapperRef.contains(e.target) && !this.state.active) {
      return;
    } else if (this.childRef.contains(e.target)) {
      return;
    }

    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setChildRef(node) {
    this.childRef = node;
  }

  render () {
    return (
      <React.Fragment>
        <div onClick={this.handleClick} ref={this.setWrapperRef}>
          {this.props.children}
          <span className="friend-requests" ref={this.setWrapperRef}>F</span>
          <div className={this.state.active ? 'friend-requests-full': 'friend-requests-none'} ref={this.setChildRef}>
            <FriendRequestList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendRequests
