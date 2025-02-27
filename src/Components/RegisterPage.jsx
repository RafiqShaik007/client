import "../styles/register.css"
import { useState } from "react";
import {Link} from 'react-router-dom'

const RegisterForm = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div id="RegisterForm">
        <div className="auth-container">
      <div className="logo">GourmetExpress</div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="fullname" placeholder=" " value={formData.fullname} onChange={handleChange} required />
          <label htmlFor="fullname">Full Name</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} required />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="input-group">
          <input type={showPassword ? "text" : "password"} id="password" placeholder=" " value={formData.password} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle`} onClick={togglePasswordVisibility}></i>
        </div>
        <button type="submit" className="submit-btn">Create Account</button>
        <div className="auth-switch">
          Already have an account? <Link to='/login'>Sign in</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;
