import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
    <div className='footer-container' id='contact'>
        <div className="footer-content">
            <div className="social-media">
                <div className="about-company">
                    <div className="company-name">
                        <span className='company-logo'><span>=</span></span>
                        <h2>Pepper</h2>

                    </div>
                    <p>Pepper is one of the most reliable delivery platform Management service to automate your network</p>
                    <a href="#" className='btn-filled'>Get started</a>
                </div>
                <div className="media-links">
                    <a href="#"><LinkedInIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><EmailIcon /></a>
                </div>
            </div>
            <div className="links">
                <div className="main-pages">
                    <h2>Main Pages</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Blog template</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Pricing Ecommerce</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Careers template</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="template-pages">
                    <h2>Template Pages</h2>
                    <ul>
                        <li><a href="#">Style Guide</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Changelog</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>&#169; All rights reserved. 
                <a href="#" id='flowset'> Flowset </a> 
                Powered by <a href="#"> Wf</a>
            </p>
        </div>
    </div>
    </>

  )
}

export default Footer