import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "../styles/login.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted: ', email, password);
        if(email === 'shaikrafiq8074@gmail.com' && password === 'shaik123'){
            alert('Logged Successfully')
            navigate('/menu')
        }
        else{
            alert('User name or Password is Wrong')
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div id="LoginForm">
            <div className="floating-food">🍔</div>
            <div className="floating-food">🍣</div>
            <div className="floating-food">🍕</div>

            <div className="auth-container">
                <div className="logo">GourmetExpress</div>
                
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder=" " 
                        />
                        <label>Email Address</label>
                    </div>

                    <div className="input-group">
                       
                        <input type={showPassword ? "text" : "password"} id="password" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)}   required />
                        <label>Password</label>
                        <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle`} onClick={togglePasswordVisibility}></i>
                       
                    </div>

                    <button type="submit" className="submit-btn">Sign In</button>
                    <div className="auth-switch">
                        New user? <Link to='/register'>Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
