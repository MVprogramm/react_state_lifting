import React from "react";

import "./index.scss";

import UserProfile from "./UserProfile.jsx";
import UserMenu from "./UserMenu.jsx";

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      user: this.props.user
    }
  }
 

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user} />
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    );
  }
};

export default App;
