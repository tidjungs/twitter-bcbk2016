import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Tweet from './containers/Tweet';

import io from 'socket.io-client';
var socketURL = 'http://localhost:5000';
var options ={
  transports: ['polling'],
  'force new connection': true
};

class App extends Component {
  state = {
    tweets: []
  }
  render() {
    console.log('state' + JSON.stringify(this.state.tweets));
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1 className={styles.greeting}>Greeting</h1> 
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }
  componentDidMount() {
    var self = this;
    var client1 = io.connect(socketURL, options);
      client1.on('connect', function(data){
      client1.on('new tweet', function(data) {
        self.setState({
          tweets: [...self.state.tweets, 
            {
              name: data.user.name,
              screen_name: data.user.screen_name,
              text: data.text,
              time: data.user.created_at
            }
          ]
        })
      });
    });
  }
}

export default App;
