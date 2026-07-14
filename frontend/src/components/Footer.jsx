import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer className='footer'>

            <div className='footer-container'>

                <div className='footer-section'>

                    <h2>CrackGen</h2>

                    <p>
                        Practice interview questions, improve your skills
                        and crack your dream job with confidence.
                    </p>

                </div>


                <div className='footer-section'>

                    <h3>Quick Links</h3>

                    <a href="/">Home</a>

                    <a href="/subjects">Subjects</a>

                    <a href="/about">About</a>

                    <a href="/contact">Contact</a>

                </div>


                <div className='footer-section'>

                    <h3>Popular Subjects</h3>

                    <p>HTML</p>

                    <p>CSS</p>

                    <p>JavaScript</p>

                    <p>React JS</p>

                    <p>Node JS</p>

                </div>


                <div className='footer-section'>

                    <h3>Contact</h3>

                    <p>Email: support@crackgen.com</p>

                    <p>Phone: +91 XXXXX XXXXX</p>

                    <p>India</p>

                </div>

            </div>


            <div className='footer-bottom'>

                <p>
                    © 2026 CrackGen. All Rights Reserved.
                </p>

            </div>

        </footer>

    )
}

export default Footer;