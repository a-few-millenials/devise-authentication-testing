import React from "react"
import PropTypes from "prop-types"
import DropdownMenu from "./DropdownMenu"
class Context extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (!this.wrapperRef.contains(e.target) && !this.state.active) {
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
        {this.props.children}
        <div className="context-menu" ref={this.setWrapperRef}>
          Menu
          <div className={this.state.active ? 'dropdown-list-full': 'dropdown-list'} ref={this.setChildRef}>
            <DropdownMenu />
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Context
