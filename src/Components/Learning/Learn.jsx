import React from 'react';
import './Learn.css';
import LearnImg from './LearnImg/Learn.png';

function Learn() {
  return (
    <section className="learn py-5">
      <div className="container">
        <div className="learning-container d-flex justify-content-between align-items-center">
          <div className="learn-content text-light">
            <h3 className="display-4">What will you learn?</h3>
            <ul className="mt-4 learn-menu ms-5">
              <li className="learn-list mt-3">What are frequencis</li>
              <li className="learn-list mt-3">Using DAW</li>
              <li className="learn-list mt-3">Vocals Processing</li>
              <li className="learn-list mt-3">Mixing</li>
              <li className="learn-list mt-3">Mixing Console</li>
              <li className="learn-list mt-3">Mastering</li>
            </ul>
          </div>
          <div className="learn-image">
            <img src={LearnImg} alt="Learn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
