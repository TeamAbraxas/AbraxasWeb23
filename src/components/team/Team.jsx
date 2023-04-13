import React from "react";
import '../../styles/team/team.css';
import Navbar from '../Navbar';
import Carousel from "./Carousel";

function Teams() {
    return (
        <div className="teamContainer">
            <Navbar />
            <div className="teamHeroContainer">
                <Carousel year={0} />
                <Carousel year={3} />
                <Carousel year={2} />
                <Carousel year={1} />
            </div>
        </div>
    );
}

export default Teams;