import React from 'react';
import styles from '../App.scss'
export const Card = (tweet, key) => (
  <div key={key} className={styles.card}>
  	<img src={tweet.profile_image} className={styles.profile_image} role='presentation' />
  	<div className={styles.header}>
    	<p className={styles.name}>{tweet.name}</p>
    	<p className={styles.screen_name}> @{tweet.screen_name}</p>
    	<p className={styles.time}>{tweet.time}</p>
    </div>
    <div className={styles.message}>
    	{ 
    		tweet.text.map((word, id) => {
    			return word[0] === '#' ? <span style={{color: '#1da1f2'}} key={id}>{ word }</span> : word
    		}) 
    	}
    </div>
   </div>
);

