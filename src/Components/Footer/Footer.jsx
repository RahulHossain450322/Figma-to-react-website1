import React from 'react';
import './Footer.css';
import footerLogo from './FooterLogo/SoundDZign.png';
import link1 from './FooterLinkImg/Facebook Logo.svg';
import link2 from './FooterLinkImg/Twitter Logo.svg';
import link3 from './FooterLinkImg/Instagram Logo.svg';

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="footer-wrapper">
          {/* single footer content starts here */}
          <div className="single-footer-content">
            <div className="footer-img mb-3">
              <img src={footerLogo} alt="Logo" />
            </div>
            <div className="footer-link mb-3">
              <div className="link-img">
                <img src={link1} alt="facebook" />
              </div>
              <div className="link-img">
                <img src={link2} alt="twitter" />
              </div>
              <div className="link-img">
                <img src={link3} alt="instagram" />
              </div>
            </div>
          </div>
          {/* single footer content starts here */}
          {/* single footer content starts here */}
          <div className="single-footer-content">
            <h4 className="text-danger">Quick Links</h4>
            <p className="mb-0 text-light">Blog</p>
            <p className="text-light">Privacy Policy</p>
          </div>
          {/* single footer content starts here */}
          {/* single footer content starts here */}
          <div className="single-footer-content">
            <h4 className="text-danger">Contact Us</h4>
            <p className="mb-0 text-light">contact@gmai.com</p>
            <p className="text-light">+8801434473734</p>
          </div>
          {/* single footer content starts here */}
        </div>
        <p className="text-light">
          This website is designed by <span className='h4 text-primary'>HungryCoder</span> Ⓒ 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
