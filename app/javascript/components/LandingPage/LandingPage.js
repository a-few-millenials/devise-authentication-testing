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
        <Button Title="Sign Up" Link="/users/sign_up" Class="sign-up" />
        <Button Title="Sign In" Link="/users/sign_in" Class="sign-in" />
      </React.Fragment>
    );
  }
}

export default LandingPage
