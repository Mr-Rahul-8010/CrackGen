import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })

            });

            const data = await response.json();

            alert(data.msg);

            if (data.msg === "Signup Successful!") {
                navigate("/login");
            }

        }

        catch (err) {
            console.log(err);
        }

    }

    return (

        <div className='signup-container'>

            <div className='heading-text'>
                <h1>Create Your Free Account</h1>
            </div>

            <div className='signup-form'>

                <form onSubmit={handleSubmit}>

                    <label className='form-label'>Name:</label>

                    <input
                        type='text'
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <br />

                    <label className='form-label'>Email:</label>

                    <input
                        type='email'
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <br />

                    <label className='form-label'>Password:</label>

                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br />
                    <br />

                    <button
                        className='signup-btn'
                        type='submit'
                    >
                        Sign Up
                    </button>

                    <br />

                    <Link to="/login">
                        Already have an account? Login
                    </Link>

                </form>

            </div>

        </div>

    );
}

export default Signup;