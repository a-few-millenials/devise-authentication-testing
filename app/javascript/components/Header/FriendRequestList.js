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
    fetch("/").then(res => res.json()).then(
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
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.email}
            </li>
          ))}
        </ul>
      )
    }
    return (
      <React.Fragment>
        {/*
          Use Ajax to get list of Friend requests from current user

          Put Ajax call into componentWillMount() method and pull array of users that have sent 
          current user a friend request
        */}
      </React.Fragment>
    );
  }
}

export default FriendRequestList
