import React from "react";

import "./index.scss";

import UserProfile from "./UserProfile.jsx";
import UserMenu from "./UserMenu.jsx";

class App extends React.Component {
  state = {
    userData: null,
  }
  
  componentDidMount() {
    this.fetchUserData(this.props.user);
  }

  fetchUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then(res => res.json())
      .then(userData =>
        this.setState({
          userData,
        }),
      );
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
};

export default App;
