import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import facebook from '../Assests/facebook.png'
import twitter from '../Assests/twitter.png'
import instagram from '../Assests/instagram.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-links">
            <ul>
                <li className='list-headings'>Company</li>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
            </ul>
            <ul>
                <li  className='list-headings'>Communities</li>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Adverising</li>
                <li>Investors</li>
                <li>Vendors</li>
            </ul>
            <ul>
                <li  className='list-headings'>Useful links</li>
                <li>Support</li>
                <li>Free Mobile App</li>
            </ul>
            <ul>
                <li  className='list-headings'>Spotify Plans</li>
                <li>Premium Individuals</li>
                <li>Premium Duo</li>
                <li>Premium Family</li>
                <li>Premium Student</li>
                <li>Spotify Free</li>
            </ul>
            <div className="footer-sociallinks">
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
            </div>
        </div>
        <hr className='footer-horizontalline'/>
        <p className="footer-copyright">© 2024 Spotify AB</p>
    </div>
  )
}

export default Footer