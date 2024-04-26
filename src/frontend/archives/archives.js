import React from 'react';
import './archives.css';
import ToggleList from './togglelist';
import VerticalGradientBackground from '../component/gradientbg';

const Archives = () => {
  const gradient = VerticalGradientBackground();
  const items = [
    {
      id: 1,
      title: 'Name Generated',
      time: 'April, 2024',
      content: 'Trung binh',
      imageUrl: 'src/frontend/pic/bg1.jpg',
    },
    {
      id: 2,
      title: 'Braille Text',
      time: 'May, 2024',
      content: 'Additional content for Item 2',
      imageUrl: 'src/frontend/pic/bg1.jpg',
    },
    {
      id: 3,
      title: 'Upcoming Projects',
      content: 'Additional content for Item 3',
      imageUrl: 'src/frontend/pic/bg1.jpg',
    },
  ];
  return (
    <div className='background'>
      <div style={{ background: gradient, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="content">
          <h1 className="proj-nums">10 projects</h1>
          <p className="intro">With dedication and love, we present our project to help raise public awareness of Vietnam product and Vietnam soul</p>
          <ToggleList items={items} />
        </div>
    </div>
    </div>
  );
}

export default Archives;
