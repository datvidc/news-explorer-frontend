import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      // name: "Lacking Gravitas",
      // about: "SPaceSHip", avatar: defaultAvatarPicture, _id" some id.
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');

    if (token) {
      this.checkToken(token);
      // now for generating cards
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
export default App;


