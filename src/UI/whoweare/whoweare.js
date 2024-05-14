import React, { useState } from 'react';
import './whoweare.css';
import background from '../pic/background.png';
import logo from '../pic/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import wwa1 from '../pic/wwa1.png';
import wwa2 from '../pic/wwa2.png';
import wwa3 from '../pic/wwa3.png';
import wwa4 from '../pic/wwa4.png';
import wwa_main_2 from '../pic/wwa_main_2.png';
import wwa_main1 from '../pic/wwa_main1.png';
const Whoweare = () => {
  const [activePanel, setActivePanel] = useState(0);
  const panels = [
    { id: 0, img: wwa_main1,content: "Short description about this department" , title: "Person Name", filter: 'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' },
    { id: 1, img: wwa_main1,content: "Short description about this department" , title: "Person Name", filter: 'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' },
    { id: 2, img: wwa_main1,content: "Short description about this department" , title: "Person Name", filter: 'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' },
    { id: 3, img: wwa_main1,content: "Short description about this department" , title: "Person Name", filter: 'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' }
  ];
  const handlePanelClick = index => setActivePanel(index);
  return (
    <div className="whoweare">
      <img src={background} className='background' alt="background" />

      <div className="container">
        {/* Header */}
        <div className='header-pos'>
          <img src={logo} className="logo" alt="Digital Humanities Lab logo" />
          <div className="menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        {/* Top Horizontal Line */}
        <div className="line">
          <div className="horizontal-line"></div>
        </div>

        {/* Title and Subtitle Text */}
        <div className="title-section">
          <div>
            <h1>Meet our team</h1>
          </div>
          <div>
            <p>We'll never walk alone.<br /> Together, we thrive on the strength of <br />  our team and the magic of teamwork.</p>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="line">
          <div className="horizontal-line"></div>
        </div>

        <div className="profile">
          <div className="box">
            <img src={wwa1} alt="President Office " className='pic_profile' style={{ filter: 'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' }} />
            <div className="name">
              <h1>President Office</h1>
            </div>
            <div className="description">
              <p>Short description about this department</p>
            </div>
          </div>
          <div className="box">
            <img src={wwa_main1} alt="President Office " className='pic_profile' style={{ filter: 'sepia(1) hue-rotate(90deg)' }} />
            <div className="name">
              <h1>Communication Office</h1>
            </div>
            <div className="description">
              <p>Short description about this department</p>
            </div>
          </div>
          <div className="box">
            <img src={wwa3} alt="President Office " className='pic_profile' style={{ filter: 'sepia(0.5) hue-rotate(50deg) saturate(1.5) brightness(0.9)' }} />
            <div className="name">
              <h1>Project Development</h1>
            </div>
            <div className="description">
              <p>Short description about this department</p>
            </div>
          </div>
          <div className="box">
            <img src={wwa4} alt="President Office " className='pic_profile' style={{ filter: 'sepia(1) hue-rotate(-40deg) saturate(2) brightness(0.9)' }} />
            <div className="name">
              <h1>Research Office</h1>
            </div>
            <div className="description">
              <p>Short description about this department</p>
            </div>
          </div>
        </div>
        <div className="each_profile">

          <div className="each_profile_heading">
            <h1>Communication Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>

          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activePanel === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelClick(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>

        </div>



        <div className="each_profile">
          <div className="each_profile_heading">
            <h1>Communication Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>
          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activePanel === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelClick(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="each_profile">
          <div className="each_profile_heading">
            <h1>Communication Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>
          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activePanel === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelClick(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="each_profile">
          <div className="each_profile_heading">
            <h1>Communication Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>
          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activePanel === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelClick(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Whoweare