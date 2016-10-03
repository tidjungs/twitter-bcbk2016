import React from 'react';

export const Card = (tweet, key) => (
  <div key={key} className='card'>
    <p>{tweet.name}</p>
    <p>{tweet.screen_name}</p>
    <p>{tweet.time}</p>
    <p>{tweet.text}</p>
  </div>
);
