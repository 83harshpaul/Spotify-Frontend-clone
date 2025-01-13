import React from 'react'
import './CSS/SignupOrLoginFirst.css'
import artist1 from "../Assests/art1.png";
import allContent from '../Data/AllContent';
import {Link} from 'react-router-dom'

const SignupOrLoginFirst = ({passingImage}) => {  
   
 const filteredSource = allContent.filter(element =>{
    if(element.id === passingImage){
       return element.picture
    }
 })
 const imageSource =  filteredSource[0].picture

 
 const handleClosing = (event) => {
    const element = event.target;
    if(element.className === "signupOrLoginFirst-close" || element.className === "signupOrLoginFirst"){
         
    }
 }
  return (
    <div className="signupOrLoginFirst" onClick={handleClosing}>
        <div className="signupOrLoginFirst-container">
                {/* <img src={artist1} alt="" /> */}
                {/* {currentImage} */}
                <img src={imageSource} alt="" /> 
                <div className="signupOrLoginFirst-container-options">
                    <span className="signupOrLoginFirst-container-line1">Start listening with a<br /> free Spotify account</span>
                    <Link to="/signup"><button className="signupOrLoginFirst-container-button1">Sign up free</button></Link>
                    <button className="signupOrLoginFirst-container-button2">Download app</button>
                    <span className="signupOrLoginFirst-container-line2">Already have an account? <Link to="/login"><span className="signupOrLoginFirst-container-login"> Log in</span></Link> </span>
                </div>

        </div>
        <Link to="/" className="signupOrLoginFirst-closinglink"><span className="signupOrLoginFirst-close">Close</span></Link>
    </div>
  )
}

export default SignupOrLoginFirst