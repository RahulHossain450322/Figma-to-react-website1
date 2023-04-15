/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Header.css';
import NavImg from './NavbarImg/SoundDZign.png';
import MenuIcon from './NavbarImg/Menu Icon.svg';
// eslint-disable-next-line import/no-unresolved
import CrossIcon from './NavbarImg/vector.png';

function Header() {
  const display = () => {
    const menuList = document.querySelector('.nav-section');
    const crossIcon = document.querySelector('.cross-icon');
    menuList.classList.add('show');
    crossIcon.classList.add('show');
  };
  const hide = () => {
    const menuList = document.querySelector('.nav-section');
    const crossIcon = document.querySelector('.cross-icon');
    menuList.classList.remove('show');
    crossIcon.classList.remove('show');
  };
  // eslint-disable-next-line linebreak-style
  return (
    <header className="header">
      <div className="container">
        <div className="pt-3">
          <nav className="navbg rounded-2 py-3 px-3 d-flex justify-content-between align-items-center">
            <div className="">
              <img className="logo" src={NavImg} alt="NavImage" />
            </div>
            <div className="nav-section">
              <ul className="nav-menu nav">
                <li className="nav-item">About</li>
                <li className="nav-item">Course Details</li>
                <li className="nav-item">Blogs</li>
                <li className="nav-item">Testimonials</li>
              </ul>
            </div>
            <div className="menu-icon">
              <img className="menuBtn" onClick={display} src={MenuIcon} alt="menu-icon" />
            </div>
            <div className="cross-icon">
              <img className="menuBtn" onClick={hide} src={CrossIcon} alt="menu-icon" />
            </div>
          </nav>
        </div>
        <div className="card-section ms-auto">
          <div className="card-body p-5">
            <p className="h5">Sound Design Masterclass</p>
            <p className="h1 my-4">
              Learn the Art of Sound Design
            </p>
            <button type="button" className="btn btn-danger">
              Demo Lesson
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
