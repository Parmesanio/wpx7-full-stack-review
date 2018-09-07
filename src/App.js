import React, { Component } from 'react';
import './App.css';
import route from './route';
import Header from './Components/Header';

class App extends Component {

  // when u write it like this, you don't have to bind it
  // window.location.origin mean 'this website, whichever one I'm currently on' e.g. localhose:3000
  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    const scope = encodeURIComponent('openid profile email')
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.login}>Log in</button>
        {route}
      </div>
    );
  }
}

export default App;
