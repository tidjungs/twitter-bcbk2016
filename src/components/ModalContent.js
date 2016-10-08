import React from 'react';
import styles from '../css/Modal.scss'
export const ModalContent = (tweet, key) => (
  <div className={styles.modal}>
  	<img src={tweet.profile_image} role='presentation' />
  	<div className={styles.header}>
    	<p className={styles.name}>{tweet.name}</p>
    	<p className={styles.screen_name}> @{tweet.screen_name}</p>
    </div>
  </div>
);

