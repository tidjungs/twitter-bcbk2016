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

import img from './bcbk.jpg'

class App extends Component {
  state = {
    tweets: [
      {
        name: 'tidjungs',
        screen_name: 'handmakers',
        text: ['hello ', '#test', ' my name is tid ', '#bcbk'],
        time: 'Sep 4'
      },
      {
        name: 'tidjungs',
        screen_name: 'handmakers',
        text: ['hello ', '#test', ' my name is tid ', '#bcbk'],
        time: 'Sep 4'
      },
      {
        name: 'tidjungs',
        screen_name: 'handmakers',
        text: ['hello ', '#test', ' my name is tid ', '#bcbk'],
        time: 'Sep 4'
      }
    ]
  }
  render() {
    console.log('state' + JSON.stringify(this.state.tweets));
    return (
      <div className={styles.App}>
        <img className={styles.image} src={img} />
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }
  componentDidMount() {
    // var self = this;
    // var client1 = io.connect(socketURL, options);
    //   client1.on('connect', function(data){
    //   client1.on('new tweet', function(data) {
    //     self.setState({
    //       tweets: [...self.state.tweets, 
    //         {
    //           name: data.user.name,
    //           screen_name: data.user.screen_name,
    //           text: data.text,
    //           time: data.user.created_at
    //         }
    //       ]
    //     })
    //   });
    // });
  }
}

export default App;
