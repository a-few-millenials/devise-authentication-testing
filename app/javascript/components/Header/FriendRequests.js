import React from "react"
import PropTypes from "prop-types"
class FriendRequests extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef= this.setWrapperRef.bind(this);
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
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

  render () {
    return (
      <React.Fragment>
        <div onClick={this.handleClick} ref={this.setWrapperRef}>
          {this.props.children}
          <span className="friend-requests">F</span>
          <div className={this.state.active ? 'friend-requests-full': 'friend-requests-none'}>
            <h2>Testing</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendRequests
