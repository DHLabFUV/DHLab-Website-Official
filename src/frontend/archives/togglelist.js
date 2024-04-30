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
            <span>{item.title}</span>
            <span>{item.time}</span>
            {openItem === item.id && <p className="additional-content">
              <img src={item.imageUrl} alt="Additional" className='image-item' />
              <p>{item.content}</p>
            </p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleList;
