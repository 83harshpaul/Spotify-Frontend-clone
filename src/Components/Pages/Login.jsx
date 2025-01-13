import React from 'react'
import './CSS/Login.css'
import logo from '../Assests/spotifyb&w.png'
import facebook from '../Assests/bluefacebook.png'
import apple from '../Assests/apple.png'
import google from '../Assests/google.png'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <div className="login-container">
            <img src={logo} alt="" className='login-logo'/>
            <span className="login-login">Log in to Spotify</span>
            <div className="login-options">
                <div className="login-buttons"><img src={google} alt=""/><span>Sign up with Google</span></div>
                <div className="login-buttons"><img src={facebook} alt=""/><span>Sign up with Facebook</span></div>
                <div className="login-buttons"><img src={apple} alt=""/><span>Sign up with Apple</span></div>
                <div className="login-buttons"><span>Continue with phone number</span></div>
            </div>
            <hr className="login-horizontal"/>
            <form className='login-form'>
          <label className="form-label">Email or username</label>
          <input type="email" name="name" placeholder="Email or username" className='form-input'/>
          <label className="form-label">Password</label>
          <input type="password" name="name" placeholder="Password" className='form-input'/>
         
          <button className="login-next">Log In</button>
          <span className="login-forgotpassword">Forgot your password?</span>
          <span className="login-account">D'ont have an account?<Link to="/signup"><span>Sign up for Spotify.</span></Link></span>
        </form>
        </div>
        <div className="login-privacypolicy">
            This site is protected by reCAPTCHA and the Google <span>Privacy Policy </span> 
            and <span>Terms of Service</span> apply.
        </div>
    </div>
  )
}

export default Login