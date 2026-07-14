import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
    return (
        <>
            <Navbar />

            <div className="about-container">

                <div className="about-hero">
                    <h1>About CrackGen</h1>
                    <p>
                        Your one-stop platform to prepare for technical interviews,
                        improve your skills, and land your dream job.
                    </p>
                </div>

                <div className="about-section">

                    <div className="about-card">
                        <h2>🎯 Our Mission</h2>
                        <p>
                            CrackGen is built to help students and job seekers prepare
                            for interviews with real interview questions, mock tests,
                            career roadmaps, and downloadable study materials.
                        </p>
                    </div>

                    <div className="about-card">
                        <h2>🚀 What We Offer</h2>

                        <ul>
                            <li>✔ Subject-wise Interview Questions</li>
                            <li>✔ MERN, Java & Python Full Stack Preparation</li>
                            <li>✔ Data Analytics & Data Engineering Roadmaps</li>
                            <li>✔ Mock Tests with Score Analysis</li>
                            <li>✔ PDF Download of Questions & Answers</li>
                            <li>✔ Career Guidance for Freshers</li>
                        </ul>
                    </div>

                    <div className="about-card">
                        <h2>💡 Why CrackGen?</h2>
                        <p>
                            We focus on practical interview preparation instead of
                            lengthy theory. Our goal is to make learning simple,
                            organized, and effective so you can prepare with
                            confidence.
                        </p>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default About;