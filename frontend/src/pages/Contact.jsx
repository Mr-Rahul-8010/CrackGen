import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className="contact-container">

                <div className="contact-heading">
                    <h1>Contact Us</h1>
                    <p>
                        Have questions, feedback, or suggestions? We'd love to hear from you!
                    </p>
                </div>

                <div className="contact-card">

                    <form className="contact-form">

                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                        <label>Subject</label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            required
                        />

                        <label>Message</label>
                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                    <div className="contact-info">

                        <h2>Get In Touch</h2>

                        <p>
                            📧 Email: support@crackgen.com
                        </p>

                        <p>
                            📞 Phone: +91 XXXXX XXXXX
                        </p>

                        <p>
                            📍 India
                        </p>

                        <p>
                            We usually respond within 24 hours.
                        </p>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Contact;