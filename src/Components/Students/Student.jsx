import React from 'react';
import './Student.css';
import student from './StudentImg/student.svg';
import video from './StudentImg/video.svg';

function Student() {
  return (
    <section className="student py-5">
      <div className="container">
        <div className="student-content">
          <div className="info-common">
            <div className="student-img">
              <img src={student} alt="student" />
            </div>
            <span className="h3">23,000+</span>
            <span className="">students</span>
          </div>
          <div className="info-common">
            <div className="student-img">
              <img src={video} alt="video" />
            </div>
            <span className="h3">26 hrs</span>
            <span className="">video content</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Student;
