import React from 'react';
import Navbar from '../Navbar';
import '../../styles/coming/coming.css';
import TextBackground from "../../assets/images/coming/textBack.png";

const Coming = () => {
    return (
        <div className='soonContainer'>
            <div className="tempNav">
                <Navbar />
            </div>
            <div className="soonHeroContainer">
                <h3 className="textsoon" style={{ backgroundImage: 'url(' + TextBackground + ')' }} ><div>Landing</div> <div>Soon</div></h3>
            </div>
        </div>
    )
}

export default Coming;