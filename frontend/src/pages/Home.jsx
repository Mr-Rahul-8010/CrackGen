import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router';
import './Home.css';

import { getMessage } from '../api/api';

const Home = () => {

    const [msg,setMsg] = useState(""); // backend 

    useEffect(()=>{
        getMessage()
        .then((data)=>{
            console.log(data);
            setMsg(data.message);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const navigate = useNavigate();

    return (
        <>

            {/* <h1>{msg}</h1> */}

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
                        <button onClick={() => navigate('/signup')} className='join-btn'>
                            Crack Now
                        </button>

                        <button onClick={() => navigate('/subjects')} className='explore-btn'>
                            Explore Subjects
                        </button>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home;