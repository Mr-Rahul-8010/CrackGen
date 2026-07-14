import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>

            <Navbar />

            <div className='home-container'>

                <div className='home-content'>

                    <h1 className='home-title'>
                        Welcome to CrackGen
                    </h1>

                    <p className='home-subtitle'>
                        Unlock Your Potential.
                        Practice Real Interview Questions.
                        Crack Every Opportunity.
                    </p>

                    <div className='home-quotes'>

                        <p>
                            Crack interviews with confidence.
                            Learn, Practice, and Get Hired.
                        </p>

                        <p>
                            Your journey to becoming interview-ready starts here.
                        </p>

                    </div>


                    <div className='btn-container'>

                        <button 
                            onClick={() => navigate('/signup')} 
                            className='join-btn'
                        >
                            Crack Now
                        </button>


                        <button 
                            onClick={() => navigate('/subjects')} 
                            className='explore-btn'
                        >
                            Explore Subjects
                        </button>

                    </div>

                </div>

            </div>


            <Footer />

        </>
    );
}

export default Home;