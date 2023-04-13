import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "../../styles/team/carousel.css";
import CC from '../../assets/cc.json';
import ThirdYearMembers from '../../assets/third_year.json';
import SecondYearMembers from '../../assets/second_year.json';
import FirstYearMembers from '../../assets/first_year.json';
import { BsGithub } from "react-icons/bs";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram}  from "react-icons/ai";

const Carousel = (props) => {
    let Members = ThirdYearMembers;
    let YearTitle = "Co-ordinators";

    const year = props.year;
    if (year === 2) {
        Members = SecondYearMembers;
        YearTitle = "Executives";
    } else if (year === 1) {
        Members = FirstYearMembers;
        YearTitle = "Volunteers";
    } else if (year === 0) {
        Members = CC;
        YearTitle = "Core Co-ordinators"
    } else {
        Members = ThirdYearMembers;
        YearTitle = "Co-ordinators";
    }

    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);
 

    return (
        <>
            <h1 className='yearTitle'>{YearTitle}</h1>
            <motion.div className="carousel" ref={carouselRef}>
                <motion.div drag="x" dragConstraints={{ right:0, left: -width }} className="innerCarousel">
                    {
                        Members && Members.map((member, index) => {
                            return (
                                <motion.div className="card" key={index}>
                                    <div className="wrapper">
                                        <img src={member.background} alt={member.name} className="cover-image" />
                                    </div>
                                    
                                    <img src={member.foreground} alt={member.name} className="character" />
                                    <div ><img src={member.title} alt={member.name} className="name_title" /></div>
                                    <div className='socialMediaIcons'>
                                        <div className='icon1'>{(member.github)?<a href={member.github} rel="noreferrer"  target="_blank"><BsGithub /></a>:<></>}</div>
                                        <div className='icon2'>{(member.linkedin)?<a href={member.linkedin} rel="noreferrer"  target="_blank"><AiOutlineLinkedin /></a>:<></>}</div>
                                        <div className='icon3'>{(member.insta)?<a href={member.insta}  rel="noreferrer" target="_blank"><AiOutlineInstagram /></a>:<></>}</div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </>
    )
}

export default Carousel
