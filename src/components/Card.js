import React from 'react';

export const Card = (tweet, key) => (
  <div key={key} className='card'>
    <p>{tweet.text}</p>
  </div>
);
