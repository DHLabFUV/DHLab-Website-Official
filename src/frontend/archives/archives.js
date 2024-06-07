import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './archives.css';
import ToggleList from './togglelist';
import image1 from '../pic/7.jpg';
import image2 from '../pic/8.jpg';
import image3 from '../pic/6.jpg';

import bg1 from '../pic/1.jpg';
import bg2 from '../pic/2.jpg';
import bg3 from '../pic/3.jpg';
import Footer from '../footer/footer';

const Archives = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  const images = useMemo(() => [bg1, bg2, bg3], []); // Memoize the images array

  const changeBackgroundImage = useCallback(() => {
    console.log("Changing background image...");
    const newIndex = Math.floor(Math.random() * images.length); // Get a random index for the next image
    console.log("New index:", newIndex);
    setCurrentImageIndex(newIndex); // Update the current image index with the random index
  }, [images]); // Include images in the dependency array of useCallback

  useEffect(() => {
    console.log("Setting interval for background image change...");
    const intervalId = setInterval(changeBackgroundImage, 60000); // Change background image every 1 minute
    return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
  }, [changeBackgroundImage]); // Include changeBackgroundImage in the dependency array

  const currentImage = images[currentImageIndex]; // Get the current image based on the current index

  console.log("Current image:", currentImage);

  const items = [
    {
      id: 1,
      title: 'Name Generated',
      time: 'April, 2023',
      content: 'With dedication and love, we present our project to help raise public awareness of Vietnam product and Vietnam soul',
      imageUrl: image2, // Use the current image
    },
    {
      id: 2,
      title: 'Braille Text',
      time: 'May, 2024',
      content: 'Additional content for Item 2',
      imageUrl: image1,
    },
    {
      id: 3,
      title: 'Upcoming Projects',
      content: 'Additional content for Item 3',
      imageUrl: image3,
    },
    {
      id: 4,
      title: 'Upcoming Projects',
      content: 'Additional content for Item 3',
      imageUrl: image3,
    },
    {
      id: 5,
      title: 'Upcoming Projects',
      content: 'Additional content for Item 3',
      imageUrl: image3,
    },
  ];

  return (
    <><div className='background' style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="content">
        <h1 className="headline">10 projects</h1>
        <p className="intro">With dedication and love, we present our project to help raise public awareness of Vietnam product and Vietnam soul</p>
        <ToggleList items={items} />
      </div>
    </div>
    <Footer /></>
  );
}

export default Archives;
