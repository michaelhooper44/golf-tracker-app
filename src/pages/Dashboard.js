import React from 'react';
import styles from './Dashboard.module.css';
import style from './Card.module.css';
import Card from './Card';
import doubleOaksImage from '../images/double-oaks.jpg';
import ugaImage from '../images/uga-golf.jpg';
import laneCreekImage from '../images/lane-creek.jpg';
import chimneysImage from '../images/chimneys.jpg';
import pineHillsImage from '../images/pine-hills.jpg';

function Dashboard() {
  const cardData = [
    {
      title: 'Double Oaks',
      imageUrl: doubleOaksImage,
      buttonText: 'Play Here!',
      onClick: () => {

      },
    },
     {
       title: 'UGA Course',
       imageUrl: ugaImage,
       buttonText: 'Play Here!',
       onClick: () => {
        
       },
     },
     {
      title: 'Lane Creek',
      imageUrl: laneCreekImage,
      buttonText: 'Play Here!',
      onClick: () => {
        
      },
     },
     {
      title: 'Chimneys GC',
      imageUrl: chimneysImage,
      buttonText: 'Play Here!',
      onClick: () => {

      },
     },
     {
      title: 'Pine Hills GC',
      imageUrl: pineHillsImage,
      buttonText: 'Play Here!',
      onClick: () => {

      },
     },
  ];

  return (
    <div className={styles['dash']}>
      <h2>Course Selection</h2>
      <p>Welcome to your dashboard! Choose the golf course that you want to play.</p>
      <div className={style["card-container"]}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
          onClick={card.onClick}
        />
      ))}
    </div>
      {/* Add dashboard content */}
</div>
  );
}

export default Dashboard;
