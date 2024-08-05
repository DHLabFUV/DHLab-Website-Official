import React, { useState } from 'react';
import './whoarewe.css';
import background from '../pic/background.png';
import wwa3 from '../pic/wwa3.png';
import wwa4 from '../pic/wwa4.png';
import profNamNguyen from '../pic/thayNam.png';
import profLe from '../pic/coLe.jpg';
import profTrungPhan from '../pic/thayTrung.png';
import chiTuyenVo from '../pic/chiTuyenVo.png';
import chiVanLe from '../pic/chiVanLe.png';
// import wwa_main_2 from '../pic/wwa_main_2.png';
import wwa_main1 from '../pic/wwa_main1.png';

const Whoweare = () => {
  const [activePresidentOffice, setActivePresidentOffice] = useState(0);
  const [activeCommunicationOffice, setActiveCommunicationOffice] = useState(0);
  const [activeProjectDevelopment, setActiveProjectDevelopment] = useState(0);
  const [activeResearchOffice, setActiveResearchOffice] = useState(0);
  const panels = [
    {
      id: 0,
      img: wwa_main1, 
      content: "Short description about this department",
      title: "Person Name",
      active: activePresidentOffice,
      toggleActive: () => setActivePresidentOffice(!activePresidentOffice),
      filter:'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' 
    },
    {
      id: 1,
      img: wwa_main1,
      content: "Short description about this department",
      title: "Person Name",
      active: activeCommunicationOffice,
      toggleActive: () => setActiveCommunicationOffice(!activeCommunicationOffice),
      filter:'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' 
      
    },
    {
      id: 2,
      img: wwa_main1,
      content: "Short description about this department",
      title: "Person Name",
      active: activeProjectDevelopment,
      toggleActive: () => setActiveProjectDevelopment(!activeProjectDevelopment),
      filter:'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' 

    },
    {
      id: 3,
      img: wwa_main1,
      content: "Short description about this department",
      title: "Person Name",
      active: activeResearchOffice,
      toggleActive: () => setActiveResearchOffice(!activeResearchOffice),
      filter:'sepia(1) hue-rotate(180deg) saturate(1.5) brightness(0.8)' 

    }
  ];

  const handlePanelPre = index => setActivePresidentOffice(index);
  const handlePanelCom = index => setActiveCommunicationOffice(index);
  const handlePanelPro = index => setActiveProjectDevelopment(index);
  const handlePanelRes = index => setActiveResearchOffice(index);
  return (
    <div className="whoweare">
      <img src={background} className='background' alt="background" />

      <div className="container">
        {/* Header */}
        

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
          <div className="horizontal-line1"></div>
        </div>

        <div className="profile">
          <div className="box">
            <img src={profNamNguyen} alt="Strategy and Academic Advisor" className='pic_profile'/>
            <div className="name">

            {/* Thay Nam Nguyen */}
              <h1>Strategy and Academic Advisor</h1>
            </div>
            <div className="description">
              <p>Dr. Nguyen Nam is a founding faculty member of the Fulbright University Vietnam, now in charge of the Vietnam Studies Major of the school. He is the Director of the Vietnam Studies Center at Fulbright University Vietnam. His research interests include comparative literature (mainly East Asian literature), translation studies, and adaptation studies. Currently, he is an associate of the Harvard-Yenching Institute.  
              </p>
            </div>
          </div>
          
          
          {/* Co Lu Thi Thanh Le */}

          <div className="box">
            <img src={profLe} alt="President Office " className='pic_profile' />
            <div className="name">
              <h1>Academic Advisor</h1>
            </div>
            <div className="description">
              <p>Dr. Lu Thi Thanh Le is a Lecturer at the Faculty of Interdisciplinary Sciences, Hanoi National University. She is a researcher of literature, folklore of ethnic groups in Vietnam, and the cultural industry. Her work is focused on the myths about the origin of ethnic groups in Vietnam that are approached from the perspective of cultural anthropology.
              </p>
            </div>
          </div>

          {/* Thay Phan Thanh Trung */}
          <div className="box">
            <img src={profTrungPhan} alt="President Office " className='pic_profile' />
            <div className="name">
              <h1>Technical Advisor</h1>
            </div>
            <div className="description">
              <p>Dr. Phan Thanh Trung is a Computer Science faculty member of the Fulbright University Vietnam. He has a research background in social network mining, natural language processing, geographic information systems, and location-based services. He is interested in using the computational power and modern techniques from computer science to explore traditional topics from social sciences.</p>
            </div>
          </div>

          {/* Chi Tuyen Vo */}

          <div className="box">
            <img src={chiTuyenVo} alt="Operational Advisor " className='pic_profile'/>
            <div className="name">
              <h1>Operational Advisor</h1>
            </div>
            <div className="description">
              <p>Ms. Vo Thi Thanh Tuyen is currently the Coordinator of the Vietnam Studies Center (VSC), with eight years working in different positions at Fulbright University. Before joining the Vietnam Studies Center, she participated in many projects at the school such as the Fulbright Everest Launchpad (FEL) program, the admission process for the first student cohort, and the Outside World talk series about the book, Taiwan Cinema Round Table and Tonkin Free School International Academic Conference.
              </p>
            </div>
          </div>

          {/* Chi Van Le */}
          <div className="box">
            <img src={chiVanLe} alt="Operational Advisor" className='pic_profile'/>
            <div className="name">
              <h1>Operational Advisor</h1>
            </div>
            <div className="description">
              <p>Ms. Le Nguyen Tuong Van has a comparative literature and digital humanities background. She knows Chinese and French, and she enjoys reading and studying languages. She is always looking for new methods, including numerical methods, to interpret one or more texts.
              </p>
            </div>
          </div>

        </div>
        <div className="each_profile">

          <div className="each_profile_heading">
            <h1>President Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>

          <div className="image_container">
            {panels.map(panel => (  
              
              <div
                key={panel.id}
                className={`panel ${activePresidentOffice === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelPre(panel.id)}
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
                className={`panel ${activeCommunicationOffice === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelCom(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="each_profile">
          <div className="each_profile_heading">
            <h1>Project Development</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>
          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activeProjectDevelopment === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelPro(panel.id)}
              >
                <h1>{panel.title}</h1>
                <p>{panel.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="each_profile">
          <div className="each_profile_heading">
            <h1>Research Office</h1>
          </div>
          <div className="each_profile_des">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eget sapien vel ligula laoreet tristique. Sed consequat, mauris quis tristique condimentum, leo est tempus dolor, nec congue justo odio eu tellus. Maecenas auctor augue ut nunc rutrum, non accumsan libero dictum. Sed eget dolor semper, malesuada est nec, viverra ligula.</p>
          </div>
          <div className="image_container">
            {panels.map(panel => (
              <div
                key={panel.id}
                className={`panel ${activeResearchOffice === panel.id ? 'active' : ''}`}
                style={{ backgroundImage: `url(${panel.img})`, filter: panel.filter }}
                onClick={() => handlePanelRes(panel.id)}
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