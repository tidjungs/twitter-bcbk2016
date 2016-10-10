import React, { Component } from 'react'
import styles from './css/App.scss'
import Tweet from './containers/Tweet'
import { ModalContent } from './components/ModalContent'

import { convertTextToArr,
         // dupicateTweets,
         // dupicateGuest,
         random,
         addGuest,
         checkRetweet } from './utils'

const Modal = require('boron/WaveModal')

import io from 'socket.io-client'
var socketURL = 'http://localhost:5000'
var options ={
  transports: ['polling'],
  'force new connection': true
};

import img from './img/bcbk.jpg'
import logo from './img/logo_kanun.svg'

const contentStyle = {
  'padding': '20px'
}

class App extends Component {
  state = {
    // tweets: dupicateTweets(),
    tweets: [],
    // guests: dupicateGuest(),
    guests: [],
    luckyOne: {
        name: '',
        screen_name: '',
        text: [],
        time: '',
        profile_image: '' 
      }
  }

  render() {
    console.log(this.state.guests.length)
    return (
      <div className={styles.App}>
        <img className={styles.image} src={img} role='presentation' />
        <img className={styles.logo} src={logo} role='presentation' />
        <button className={styles.random} onClick={() => this.random()}>RANDOM</button>
         <div>
            <Modal ref='modal' contentStyle={contentStyle}>
              { ModalContent(this.state.luckyOne, 0) }
            </Modal>
        </div>
        <Tweet tweets={this.state.tweets} />
      </div>
    );
  }


  random() {
    const self = this

    let timesRun = 0

    let interval = setInterval(() => {
      
      if(timesRun++ === 100){
        
        clearInterval(interval)
        window.scrollBy(0, document.body.scrollHeight)
        
        self.setState({
          luckyOne: random(this.state.guests)
        })

        self.refs.modal.show()
      }

      window.scrollBy(0, -20)
    
    }, 10)
  }

  componentDidMount() {

    const self = this
    
    const client = io.connect(socketURL, options)

    client.on('connect', function(data){
      
      client.on('new tweet', function(data) {
        
        if(!checkRetweet(data.text)) {

          let tweets = [...self.state.tweets, 
            {
              name: data.user.name,
              screen_name: data.user.screen_name,
              text: convertTextToArr(data.text),
              time: data.created_at.substring(4,10),
              profile_image: data.user.profile_image_url
            }
          ]

          // delete first tweet when tweets > 100 //
          if(tweets.length > 100) {
            tweets.shift()
          }

          let guest = {
            name: data.user.name,
            screen_name: data.user.screen_name,
            profile_image: data.user.profile_image_url
          }

          self.setState({
            tweets: tweets,
            guests: addGuest(self.state.guests, guest)
          })

          window.scrollBy(0, document.body.scrollHeight)

        }

      })
    })
  }
}

export default App
