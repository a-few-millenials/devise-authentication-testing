import React from "react"
import PropTypes from "prop-types"
class FriendRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/friendship/get_friend_requests")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          }); 
        },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render () {
    const { error, isLoaded, items } = this.state;
    if(error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.email}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )
    }
  }
}

export default FriendRequestList
