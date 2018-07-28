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
    console.log("Log: componentDidMount");
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
    console.log("Log: componentWillUnmount");
  }

  handleClick(e) {
    console.log("Log: handleClick");
    if(!this.wrapperRef.contains(e.target) && !this.state.active) {
      console.log("Log: handleClick | beginning of if statement");
      return;
    } else if (this.childRef.contains(e.target)) {
      console.log("Log: handleClick | else if");
      return;
    }

    console.log("Log: setState");

    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });

    console.log("Log: " + currentState);
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
        <div ref={this.setWrapperRef}>
          {this.props.children}
          <span className="friend-requests" ref={this.setWrapperRef}>F</span>
          <div className={this.state.active ? 'friend-requests-full': 'friend-requests-none'} ref={this.setChildRef}>
            <FriendRequestList />
            {console.log("Button push here")}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendRequests
