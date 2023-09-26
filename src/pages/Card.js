import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ title, imageUrl, buttonText, onClick }) => (
  <div className={styles.card}>
    <img src={imageUrl} alt={title} className={styles['card-image']} />
    <div className={styles['card-content']}>
      <h2>{title}</h2>
      <button className={styles.button} onClick={onClick}>{buttonText}</button>
    </div>
  </div>
);

export default Card;
