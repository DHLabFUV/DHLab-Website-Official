import React from 'react';
import './archives.css';
import ToggleList from './togglelist';

const Archives = () => {
  const items = [
    { id: 1, title: 'Name Generated', content: 'Additional content for Item 1' },
    { id: 2, title: 'Braille Text', content: 'Additional content for Item 2' },
    {
      id: 3,
      title: 'Item 3',
      content: 'Additional content for Item 3',
      imageUrl: 'src/frontend/pic/bg1.jpg',
    },
  ];
  return (
    <div>
      <h1 className='proj-nums'>10 projects</h1>
      <p>With dedication and love, we present our project to help raise public awareness of Vietnam product and Vietnam soul</p>
      <ToggleList items={items} />
    </div>
  );
}

export default Archives;
