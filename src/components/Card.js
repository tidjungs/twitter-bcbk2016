import React from 'react';
import styles from '../App.scss'
export const Card = (tweet, key) => (
  <div key={key} className={styles.card}>
  	<div className={styles.header}>
    	<p className={styles.name}>{tweet.name}</p>
    	<p className={styles.screen_name}> @{tweet.screen_name}</p>
    	<p className={styles.time}>{tweet.time}</p>
    </div>
    <p className={styles.message}>{tweet.text}</p>
    { convertTagColor(tweet.text) }
  </div>
);


const convertTagColor = (text) => {
	for(let i=0; i<text.length; i++) {
		console.log(text[i]);
	}
	return <h1>Hello</h1>
}