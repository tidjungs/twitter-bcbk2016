import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Tweet from './containers/Tweet';
class App extends Component {
  state = {
    tweets: []
  }
  render() {
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
}

export default App;
