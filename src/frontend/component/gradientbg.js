import React from 'react';

const VerticalGradientBackground = () => {
  const gradientStyle = {
    background: `linear-gradient(to top, rgba(0, 15, 98, 1), 
    rgba(4, 50, 141, 0.8), rgba(8, 84, 185, 0))`, // Define the gradient with transparent end
    minHeight: '100vh', // Set minimum height to full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Text color on the gradient background
    fontSize: '24px', // Example font size
    fontWeight: 'bold', // Example font weight
    textAlign: 'center' // Center align text
  };

  return (
    <div style={gradientStyle}>
    </div>
  );
};

export default VerticalGradientBackground;
