import React, { Component } from 'react'
import '../../styles/timeline/timeline.css'
import background from "../../assets/images/timeline/textBack.png";
import Navbar from '../Navbar';

class Timeline extends Component {
    componentDidMount() {
        var cursor = document.querySelector('.cursor');
        var cursor2 = document.querySelector('.cursor2');
        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px;top:"
                + e.clientY + "px;";
        });

    }
    render() {
        return (
            <>
                <div className="tempNav">
                    <Navbar />
                </div>
                <div className="roadmap">
                    <h3 className="h3" style={{ backgroundImage: 'url(' + background + ')' }} >TimeLine</h3>
                    <div className="roadmap-container">
                        <div className="container-1">
                            <div className="headline">January 2023</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>18</b>: Orientation & Club Launch</div>
                                    </li>

                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>28</b>: Covered the Green Comet C/2022 E3 (ZFT)</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">February 2023</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>03</b>: Quantum Computing Workshop</div>
                                    </li>


                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>12</b>: Innovision</div>
                                    </li>

                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">March 2023</div>
                            <div className="content">
                                <ul className="timeline-list">
                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>13</b>: Looking Through The Telescope</div>
                                    </li>

                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot" onFocus={() => { "" }}></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                        <div className="container-2">
                            <div className="headline">April 2023</div>
                            <div className="content">
                                <ul className="timeline-list">

                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>15</b>: Ascensio: The Transcending The Archaic (Day 1)</div>
                                    </li>

                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>15</b>: Locked In Time</div>
                                    </li>

                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>15</b>: Ascensio: The Transcending The Archaic (Day 2)</div>
                                    </li>

                                    <li className="timeline-list-text">
                                        <div className="dots"></div>
                                        <div className="text"><b>16</b>: Photon Quest</div>
                                    </li>

                                </ul>
                            </div>

                            <div className="bottom">
                                <div className="bottom-dot"></div>
                                <div className="right-line"></div>
                                <div className="left-line"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default Timeline;