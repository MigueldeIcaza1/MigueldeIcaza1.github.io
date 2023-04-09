import './footer.css';

import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


function Footer() {


    return (
        <div className='d-flex bg-dark px-5 py-3'>
            <div className='col-md-3'></div>
            <div className='col-md-3'>
                <h2 className='label-header'>Follow Us</h2><br />
                <div className='label-text'>STAY IN TOUCH WITH <br /> US AND CONNECTED</div>
                <a href='/' className='icon-container'>
                    <FaTwitter className='social-media-icon' />
                </a>
                <a href='/' className='icon-container'>
                    <FaFacebook className='social-media-icon' />
                </a>
                <a href='/' className='icon-container'>
                    <FaInstagram className='social-media-icon' />
                </a>
            </div>
            <div className='col-md-6'>
                <h2 className='label-header'>Contact Information</h2><br />
                <div className='label-text'>196 WEST STREET, BUILDING 20 <br /> NY 100004<br />+1 22345 11234<br /> </div>
            </div>
        </div>
    );
}

export default Footer;

