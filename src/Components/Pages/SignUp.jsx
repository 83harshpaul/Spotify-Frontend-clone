import React from 'react'
import './CSS/SignUp.css'
import logo from '../Assests/spotifyb&w.png'
import facebook from '../Assests/bluefacebook.png'
import apple from '../Assests/apple.png'
import google from '../Assests/google.png'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="signup">
        <img src={logo} alt="" className='signup-logo'/>
        <span className="signup-start">Sign up to<br /> start listening</span>
        <form>
          <label>Email address</label>
          <input type="email" name="name" placeholder="name@domain.com" />
          <p className="signup-usephoneno">Use phone number instead </p>
          <button className="signup-next">Next</button>
        </form>
        <div className="signup-or">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <div className="signup-options">
          <div className="signup-buttons"><img src={google} alt=""/><span>Sign up with Google</span></div>
          <div className="signup-buttons"><img src={facebook} alt=""/><span>Sign up with Facebook</span></div>
          <div className="signup-buttons"><img src={apple} alt=""/><span>Sign up with Apple</span></div>
        </div>
        <hr  className='signup-horizontal'/>
        <p className='signup-login'>Already have an account?<Link to="/login"><span>Log in here.</span></Link></p>
        <p className='signup-privacypolicy'>This site is protected by reCAPTCHA and the Google<br/>
        <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
    </div>
  )
}

export default SignUp