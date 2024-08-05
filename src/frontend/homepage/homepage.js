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
                        The Fulbright Digital Humanities Lab (DHLab@Fulbright) is a student-led experimental group affiliated with the Vietnam Studies Center at Fulbright University Vietnam. DHLab@Fulbright focuses on preserving and developing humanistic values through digital technology. At DHLab@Fulbright, Fulbright students collaborate to create networking between professors, researchers, students, and enthusiasts in this field. DHLab@Fulbright is empowered to organize events, seminars, research, and projects to bring Vietnam's digital humanities issues to the world. With Vietnam's strong digital transformation, developing DHLab@Fulbright opens opportunities for the humanities, providing digital tools and methods for analyzing culture, history, language, and literature.

                        </h2>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="intro-head">
                    <h2>What is</h2>
                    <h1>Digital Humanities</h1>
                    <h3>Digital Humanities is an interdisciplinary field that combines technology with the social sciences, humanities, and arts. This field uses digital tools and methods to research, analyze, and present data in areas such as history, literature, linguistics, philosophy, art, and culture.
                    </h3>
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
                                    <p>Refers to technologies, methods, and systems that use data in digital form (binary) to research, perform, store, and pass down the cultural heritage of humanity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>A group of academic disciplines studying humans, culture, and society. These fields explore aspects of human beings through analytical, critical, and theoretical methods.

                    </h2>
                </div>
                <div className="secondcol">
                    <h2>Refers to technologies, methods, and systems that use data in digital form (binary) to research, perform, store, and pass down the cultural heritage of humanity.
                    </h2>
                    <div className="flip_container">
                        <div className="card">
                            <div className="front">
                                <img src={righthand} alt="" />
                            </div>
                            <div class="back">
                                <div class="back-content">
                                    <h1>Humanities</h1>
                                    <p>A group of academic disciplines studying humans, culture, and society. These fields explore aspects of human beings through analytical, critical, and theoretical methods.
                                    </p>
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
                    <h3>
                    DHLab@Fulbright thrives to become a pioneering and leading organization in Vietnam Studies through digital tools. Our contribution not only enhances the research capabilities of Fulbright University Vietnam students and faculty but also creates a diverse and creative academic environment, contributing to the sustainable development of this field in Vietnam.

                    </h3>
                </div>
            </div>

            <div className="footer">
                <div className="footer_hsc_container">
                    <div className="footer_hsc_1">
                        <h1>Building a self-leading environment for young people</h1>
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