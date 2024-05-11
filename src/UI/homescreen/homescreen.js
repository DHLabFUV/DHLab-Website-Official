import background from '../pic/background.png';
import logo from '../pic/logo.png';
import './homescreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import bubble3d from '../pic/bubble3d.png'
import lefthand from '../pic/lefthand.jpg'
import righthand from '../pic/righthand.jpg'
import footer1 from '../pic/footer1.png';
import footer2 from '../pic/footer2.png';
import footer3 from '../pic/footer3.png';
const Homescreen = () => {
    return (
        <div className='homescreen'>
            <img src={background} className='background' alt="background" />
            <div className="header">
                <div className='header-pos'>
                    <img src={logo} className="logo" alt="Digital Humanities Lab logo" />
                    {/* Add content here for the menu */}
                    <div className="menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <div className='content-container'>
                <div className="bubble3d">
                    <img src={bubble3d} alt="3D Bubble " />
                    <div className="text-content">
                        <h1>
                            Digital Humanities Lab
                        </h1>
                        <h2>
                            A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies to study, analyze, interpret, and create cultural artifacts, texts, and other materials. These labs serve as interdisciplinary environments where traditional humanities disciplines intersect with technology, computational methods, and data analysis.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="intro-head">
                    <h2>What is</h2>
                    <h1>Digital Humanities</h1>
                </div>
            </div>
            <div className="middleimage">
                <div className="firstcol">
                    <img src={lefthand} alt="" />
                    <h2>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies to study, analyze, interpret, and create cultural artifacts, texts, and other materials.</h2>
                </div>
                <div className="secondcol">
                    <h2>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies to study, analyze, interpret, and create cultural artifacts, texts, and other materials.</h2>
                    <img src={righthand} alt="" />
                </div>
            </div>
            <div className="intro">
                <div className="intro-head">
                    <h2>What are we doing as</h2>
                    <h1>Digital Humanities Lab</h1>
                </div>
            </div>

            <div className="footer">
                <img src={footer1} alt="Footer 1" />
                <img src={footer2} alt="Footer 2" />
                <img src={footer3} alt="Footer 3" />
            </div>
        </div>
    );
}

export default Homescreen;
