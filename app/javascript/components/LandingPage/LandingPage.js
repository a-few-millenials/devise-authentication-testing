import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <div className="authentication animated tada">
          <Button Title="Sign Up" Link="/users/sign_up" Class="sign-up" />
          <Button Title="Sign In" Link="/users/sign_in" Class="sign-in" />
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage
