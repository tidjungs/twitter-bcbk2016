import React, { Component } from 'react';
import styles from './App.scss';
import Tweet from './containers/Tweet';
import { convertTextToArr, dupicateTweets } from './utils'


import io from 'socket.io-client';
var socketURL = 'http://localhost:5000';
var options ={
  transports: ['polling'],
  'force new connection': true
};

import img from './bcbk.jpg'

class App extends Component {
  state = {
    tweets: dupicateTweets()
  }

  render() {
    return (
      <div className={styles.App}>
        <img className={styles.image} src={img} role='presentation' />
        <button className={styles.random} onClick={() => this.random()}>Random</button>
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }

  random() {
    let timesRun = 0;
    let interval = setInterval(() => {
      timesRun += 1;
      if(timesRun === 300){
        clearInterval(interval);
        window.scrollBy(0, document.body.scrollHeight)
      }
      window.scrollBy(0, -15)
    }, 10)
  }

  componentDidMount() {
    window.scrollBy(0, document.body.scrollHeight)
    // var self = this;
    // var client1 = io.connect(socketURL, options);
    //   client1.on('connect', function(data){
    //   client1.on('new tweet', function(data) {
        
    //     let tweets = [...self.state.tweets, 
    //       {
    //         name: data.user.name,
    //         screen_name: data.user.screen_name,
    //         text: convertTextToArr(data.text),
    //         time: data.created_at.substring(4,10),
    //         profile_image: data.user.profile_image_url
    //       }
    //     ]

    //     if(tweets.length > 100) {
    //       tweets.shift()
    //     }

    //     self.setState({
    //       tweets: tweets
    //     })

    //     window.scrollBy(0, document.body.scrollHeight)

    //   })
    // })
  }
}

export default App;
