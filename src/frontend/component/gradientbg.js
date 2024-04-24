import React from 'react';

const VerticalGradientBackground = () => {
  const gradientStyle = {
    background: 'linear-gradient(to top, #ff7e5f, #feb47b)', // Define the vertical gradient
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
