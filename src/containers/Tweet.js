import React, { Component } from 'react';
import {Card} from '../components/Card';
import styles from '../css/App.scss';

class Tweet extends Component {
  render() {
    const {tweets} = this.props;
    return (
      <div className={styles.tweets}>
        {tweets.map((tweet, index) => 
          <Card tweet={ tweet } key={index}/>
        )}
      </div>
    );
  }
}

export default Tweet;