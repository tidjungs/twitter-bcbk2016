import React, { Component } from 'react';
import styles from './App.scss';
import Tweet from './containers/Tweet';
import { ModalContent } from './components/ModalContent';
import { convertTextToArr, dupicateTweets, dupicateGuest, random } from './utils';
const Modal = require('boron/WaveModal');

import io from 'socket.io-client';
var socketURL = 'http://localhost:5000';
var options ={
  transports: ['polling'],
  'force new connection': true
};

import img from './bcbk.jpg'

const modalStyle = {
  'height': '300px'
}

const contentStyle = {
  'height': '50px',
  'width': '400px',
  'padding': '20px'
}

class App extends Component {
  state = {
    tweets: [],
    guests: dupicateGuest(),
    luckyOne: {
        name: '',
        screen_name: '',
        text: [],
        time: '',
        profile_image: '' 
      }
  }

  render() {
    return (
      <div className={styles.App}>
        <img className={styles.image} src={img} role='presentation' />
        <button className={styles.random} onClick={() => this.random()}>Random</button>
         <div>
            <Modal ref='modal' modalStyle={modalStyle} contentStyle={contentStyle}>
              { ModalContent(this.state.luckyOne, 0) }
            </Modal>
        </div>
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }


  random() {


    var self = this;

    // self.setState({
    //   luckyOne: random(this.state.guests)
    // })      
    // self.refs.modal.show();


    let timesRun = 0;
    let interval = setInterval(() => {
      timesRun += 1;
      if(timesRun === 100){
        clearInterval(interval);
        window.scrollBy(0, document.body.scrollHeight)
        self.setState({
          luckyOne: random(this.state.guests)
        })      
        self.refs.modal.show();
      }
      window.scrollBy(0, -20)
    }, 10)
  }

  componentDidMount() {
    window.scrollBy(0, document.body.scrollHeight)
    const self = this;
    const client = io.connect(socketURL, options);
    client.on('connect', function(data){
      client.on('new tweet', function(data) {
        
        let tweets = [...self.state.tweets, 
          {
            name: data.user.name,
            screen_name: data.user.screen_name,
            text: convertTextToArr(data.text),
            time: data.created_at.substring(4,10),
            profile_image: data.user.profile_image_url
          }
        ]

        if(tweets.length > 100) {
          tweets.shift()
        }

        self.setState({
          tweets: tweets
        })

        window.scrollBy(0, document.body.scrollHeight)

      })
    })
  }
}

export default App;
