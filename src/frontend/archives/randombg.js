import React, { useEffect, useState } from 'react';

const RandomBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // List of image URLs
  const images = [
    'bg1.jpg',
    'bg2.jpg',
    'bg3.jpg',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Function to set a random background image
    const setRandomBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      setBackgroundImage(selectedImage);
    };

    // Set initial random background image on component mount
    setRandomBackgroundImage();

    // Clean up function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, []); // Empty dependency array to run once on component mount

  return (
    <div
      className="background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content goes here */}
    </div>
  );
};

export default RandomBackground;
