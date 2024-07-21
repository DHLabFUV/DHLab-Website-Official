import React, { useState } from 'react';
import './togglelist.css';

const ToggleList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle the open state of an item
  const toggleItem = (itemId) => {
    if (openItem === itemId) {
      // If clicked item is already open, close it
      setOpenItem(null);
    } else {
      // Otherwise, open the clicked item
      setOpenItem(itemId);
    }
  };

  return (
    <div className="toggle-list">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={openItem === item.id ? 'active' : ''}
          >
            <span className='title'>{item.title}</span>
            <span className='time'>{item.time}</span>
            {openItem === item.id && 
            <div className="additional-content">
              <div className='image-container'>
                <img src={item.imageUrl} alt="Additional" className='image-item' />
              </div>
              <div className="detail-info">
                  <p>{item.content}</p>
              </div>
            </div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleList;
