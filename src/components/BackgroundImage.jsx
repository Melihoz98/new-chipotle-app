// BackgroundImage.js
import React from 'react';
import imageUrl from '../restaurantBillede.png';

const BackgroundImage = () => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return <div style={styles}></div>;
};

export default BackgroundImage;
