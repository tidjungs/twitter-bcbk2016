import React, { Component } from 'react';
import {Card} from '../components/Card';
class Tweet extends Component {
  render() {
    const {tweets} = this.props;
    return (
      <div>
        {tweets.map((tweet, index) => 
          Card(tweet, index)
        )}
      </div>
    );
  }
}

export default Tweet;