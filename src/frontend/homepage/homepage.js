import background from '../pic/background.png';
import logo from '../pic/logo.png';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import bubble3d from '../pic/bubble3d.png';
import lefthand from '../pic/lefthand.jpg';
import righthand from '../pic/righthand.jpg';
import footer2 from '../pic/footer2.png';
const Homescreen = () => {
    return (

        <div className='homescreen_container'>
            <img src={background} className='background' alt="background" />
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
                    <div className="flip_container">
                        <div className="card">
                            <div className="front">
                                <img src={lefthand} alt="" />
                            </div>
                            <div class="back">
                                <div class="back-content">
                                    <h1>Digital</h1>
                                    <p>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies to study, analyze, interpret, and create cultural artifacts, texts, and other materials.</h2>
                </div>
                <div className="secondcol">
                    <h2>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies to study, analyze, interpret, and create cultural artifacts, texts, and other materials.</h2>
                    <div className="flip_container">
                        <div className="card">
                            <div className="front">
                                <img src={righthand} alt="" />
                            </div>
                            <div class="back">
                                <div class="back-content">
                                    <h1>Humanities</h1>
                                    <p>A Digital Humanities Lab is a dedicated space or facility where scholars, researchers, students, and professionals in the field of humanities utilize digital tools and methodologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="intro-head">
                    <h2>What are we doing as</h2>
                    <h1>Digital Humanities Lab</h1>
                </div>
            </div>

            <div className="footer">
                <div className="footer_hsc_container">
                    <div className="footer_hsc_1">
                        <h1>Creating Value</h1>
                    </div>
                    <div className="footer_hsc_2">
                        <img src={footer2} alt="Footer 2" />
                        <h1>Exploring</h1>
                    </div>
                    <div className="footer_hsc_3">
                        <h1>Creating Value</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homescreen;