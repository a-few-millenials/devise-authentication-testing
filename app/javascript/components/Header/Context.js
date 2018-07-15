import React from "react"
import PropTypes from "prop-types"
import DropdownMenu from "./DropdownMenu"
class Context extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
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
        <span className="context-menu" onClick={this.handleClick}>
          Menu
          <span className={this.state.active ? 'dropdown-list-full': 'dropdown-list'}>
            <DropdownMenu />
          </span>
        </span>
        
      </React.Fragment>
    );
  }
}

export default Context
