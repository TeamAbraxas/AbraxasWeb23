import React from 'react';
import Navbar from '../Navbar';
import '../../styles/event/events.css';
import { useState } from 'react';


const Events = () => {
    // const lockedInTime = "../../assets/images/events/lockedInTime.webp";
    // const teleScope ="../../assets/images/events/telescope.webp";

    const [isEvent, setEvent] = useState("workshop");
    const myStyle = { color: "white", marginBottom: "2.5rem" };

    function eventHandle() {
        setEvent("events");
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "0px 0px";
    }

    function workshopHandle() {
        setEvent("workshop");
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "0px 0px";

    }

    return (
        <div>
            <div className="tempNav">
                <Navbar />
            </div>
            <div className="workShop">
                <button className='eventPageTitle' onClick={workshopHandle}>Work Shop</button>
                <button className='evtBtn' onClick={eventHandle}>Events</button>
            </div>

            <div className='eventsCard'>
                {isEvent !== "workshop" ? <>

                    <div className="wrap animate pop">
                        <div className="overlay">
                            <div className="overlay-content animate slide-left delay-2">
                                <h1 className="animate slide-left pop delay-4">Locked In Time</h1>
                                <p className="animate slide-left pop delay-5" style={myStyle}></p>
                            </div>
                            <div className="image-content1 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>An escape room is a physical adventure game in which players are locked in a room
                                and must solve a series of puzzles and challenges in order to escape within a set
                                time limit. These challenges can range from deciphering codes and puzzles to
                                manipulating objects and finding hidden clues.</p>
                        </div>
                    </div>
                    <div className="wrap animate pop">
                        <div className="overlay">
                            <div className="overlay-content animate slide-left delay-2">
                                <h1 className="animate slide-left pop delay-4">Photon Quest</h1>
                            </div>
                            <div className="image-content2 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>A laser dart game typically involves players decoding the given riddle and then aim at
                                the appropriate dart using laser to shoot at the target board. Here in this game the
                                laser will be mounted and the player will have to use his/her physics aptitude to
                                arrange the mirror and reach the final aim.</p>
                        </div>
                    </div>
                </>

                    :
                    <><div className="wrap animate pop">
                        <div className="overlay">
                            <div className="overlay-content animate slide-left delay-2">
                                <h1 className="animate slide-left pop delay-4">Telescope</h1>

                            </div>
                            <div className="image-content3 animate slide delay-5"></div>
                            {/* <div className="dotsEvent animate">
								<div className="dotEvent animate slide-up delay-6"></div>
								<div className="dotEvent animate slide-up delay-7"></div>
								<div className="dotEvent animate slide-up delay-8"></div>
							</div> */}
                        </div>
                        <div className="eventText">
                            <p>This workshop will provide a comprehensive introduction
                                to telescopes and astrophotography, designed to give participants a solid
                                foundation in the basics of observational astronomy. Participants will
                                learn about the different types of telescopes, their features, and how to
                                set them up for optimal viewing. They will also be introduced to the basics
                                of astrophotography, including how to take images of the night sky using
                                a telescope, and how to process those images using popular software
                                tools. Additionally, the workshop will cover the fundamentals of
                                observational astronomy, including the different types of celestial objects
                                that can be observed, how to locate them in the night sky, and how to
                                interpret their properties. Whether you are a complete beginner or an
                                experienced observer, this workshop will provide you with the skills and
                                knowledge needed to explore the wonders of the universe with
                                confidence. </p>
                        </div>
                    </div>
                        <div className="wrap animate pop">
                            <div className="overlay">
                                <div className="overlay-content animate slide-left delay-2">
                                    <h1 className="animate slide-left pop delay-4">Quantum Computing</h1>

                                </div>
                                <div className="image-content4 animate slide delay-5"></div>
                                {/* <div className="dotsEvent animate">
									<div className="dotEvent animate slide-up delay-6"></div>
									<div className="dotEvent animate slide-up delay-7"></div>
									<div className="dotEvent animate slide-up delay-8"></div>
								</div> */}
                            </div>
                            <div className="eventText">
                                <p> Quantum computing is a rapidly-emerging technology that
                                    harnesses the laws of quantum mechanics to solve problems too complex
                                    for classical computers. Quantum computing has the potential to change the
                                    world, and we want to make sure you are prepared. Quantum computers will
                                    soon cure cancer and global warming by trying all possible answers in
                                    parallel universes. While every developing nation invests in the development
                                    of quantum computers, we require young students to join the group, explore
                                    this field, and shape the future of this technology. This workshop will give
                                    participants an introduction to the field of quantum computing, covering
                                    topics on quantum mechanics, quantum information and computation, and
                                    quantum hardware.</p>
                            </div>
                        </div>
                    </>}
            </div>


        </div>
    )
}

export default Events;