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
      // {
      //   name: 'tidjungs',
      //   screen_name: 'handmakers',
      //   text: ['hellohellohellohellohellohellohellohe llohellohellohelloh sssssssss  sssss', '#test', ' my name is tid ', '#bcbk', 'llohellohellohelloh sssssssss  sssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ', 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'],
      //   time: 'Sep 4',
      //   profile_images: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
      // },
      // {
      //   name: 'tidjungs',
      //   screen_name: 'handmakers',
      //   text: ['hellohellohellohellohellohellohellohe llohellohellohelloh sssssssss  sssss', '#test', ' my name is tid ', '#bcbk', 'llohellohellohelloh'],
      //   time: 'Oct 03',
      //   profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
      // },
      // {
      //   name: 'tidjungs',
      //   screen_name: 'handmakers',
      //   text: ['hellohellohellohellohellohellohellohe llohellohellohelloh sssssssss  sssss', '#test', ' my name is tid ', '#bcbk', 'llohellohellohelloh'],
      //   time: 'Sep 4',
      //   profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
      // }
    ]
  }
  render() {
    return (
      <div className={styles.App}>
        <img className={styles.image} src={img} />
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }
  componentDidMount() {
    var self = this;
    var client1 = io.connect(socketURL, options);
      client1.on('connect', function(data){
      client1.on('new tweet', function(data) {
        console.log(JSON.stringify(data.user.profile_image_url))
        self.setState({
          tweets: [...self.state.tweets, 
            {
              name: data.user.name,
              screen_name: data.user.screen_name,
              text: self.convertTextToArr(data.text),
              time: data.created_at.substring(4,10),
              profile_image: data.user.profile_image_url
            }
          ]
        })
      });
    });
  }

  convertTextToArr(text) {
    let textArr = []
    let sentence = ''
    for(let i=0; i<text.length; i++) {
      sentence += text[i]
      if(text[i] === ' ') {
        textArr.push(sentence)
        sentence = ''
      }
    }
    if(sentence != '') {
      textArr.push(sentence)
    }
    return textArr
  }
}

export default App;
