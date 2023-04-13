import React, { useState, useRef } from 'react';
import '../../styles/contact/contact.css';
// import StarsCanvas from '../Stars';
import Navbar from '../Navbar';
import Astronaut from '../../assets/images/contact/astronaut.png';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        if (e && e.preventDefault) {
            const { name, value } = e.target;

            setForm({ ...form, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            setLoading(true);

            emailjs.send(
                'service_086sh5s',
                'template_7tlyxu8',
                {
                    from_name: form.name,
                    to_name: 'Adrin',
                    from_email: form.email,
                    to_email: "ashmitgupta.personal@gmail.com",
                    message: form.message,
                },
                '48SVs8nNk257tJnWX'
            )
                .then(() => {
                    setLoading(false);
                    alert("Thank you. We will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                    (error) => {
                        setLoading(false);
                        console.error(error);

                        alert("Ahh, something went wrong. Please try again.");
                    }
                )
        }
    }

    return (
        <>
            {/* <StarsCanvas /> */}
            <div className='contactContainer'>
                <Navbar className='navbar' />
                <div className="contactHeroContainer">
                    <div className='contactCard'>
                        <div className='formContainer'>
                            <div className="title">Contact Us</div>
                            <form id='contactForm' className='contactForm' ref={formRef} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className='formControl'
                                    name='name'
                                    placeholder='Your Name'
                                    onChange={handleInputChange}
                                    value={form.name}
                                />
                                <input
                                    type="email"
                                    className='formControl'
                                    name='email'
                                    placeholder='Your Email'
                                    onChange={handleInputChange}
                                    value={form.email}
                                />
                                <input
                                    type="text"
                                    className='formControl'
                                    name='message'
                                    placeholder='Your Message'
                                    onChange={handleInputChange}
                                    value={form.message}
                                />
                                <button
                                    type="submit"
                                    value="Send Message"
                                    className='submitBtn'
                                >{loading ? "Sending..." : "Send"}</button>
                            </form>
                            <div className="socials">
                                <a href='https://github.com/Team-Abraxas' target='blank'><FaGithub className='socialIcon' /></a>
                                <a href="https://instagram.com/team_abraxas?igshid=YmMyMTA2M2Y=" target='blank'><FaInstagram className='socialIcon' /></a>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <Canvas>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2}>
                                <MeshDistortMaterial
                                    color="#220736"
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Canvas>
                        <img src={Astronaut} alt="Astronaut" className='astronaut' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;