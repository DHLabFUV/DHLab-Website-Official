import React, { useState } from 'react';
import './togglelist.css';

const ToggleList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle the open state of an item
  const toggleItem = (itemId) => {
    console.log('ToggleItem called with:', itemId); // Log for debugging
    setOpenItem((prevOpenItem) => (prevOpenItem === itemId ? null : itemId));
  };

  return (
    <div className="toggle-list">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleItem(item.id)} // Handle click event
            className={openItem === item.id ? 'active' : ''} // Conditional class
          >
            <span className='title'>{item.title}</span>
            <span className='time'>{item.time}</span>
            {openItem === item.id && (
              <div className="additional-content">
                <div className='image-container'>
                  <img src={item.imageUrl} alt="Additional" className='image-item' />
                </div>
                <div className="detail-info">
                  <p>{item.content}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleList;
