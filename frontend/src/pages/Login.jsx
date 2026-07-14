import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            alert(data.msg);

            if (data.msg === "Login Successful!") {
                navigate("/");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='login-container'>

            <div className='heading-text'>
                <h1>LogIn To Your Account</h1>
            </div>

            <div className='login-form'>

                <form onSubmit={handleLogin}>

                    <label className='login-label'>Email:</label>

                    <input
                        type='email'
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <br />

                    <label className='login-label'>Password:</label>

                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br />

                    <button className='login-btn' type='submit'>
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;