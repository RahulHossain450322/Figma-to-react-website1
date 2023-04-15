import React from 'react';
import './Latest.css';
import latestImage1 from './LatestImg/Rectangle 13.png';
import latestImage2 from './LatestImg/Gtr.png';
import latestImage3 from './LatestImg/Thumbnail.png';

function Latest() {
  return (
    <section className="latest py-5">
      <div className="container">
        <div className="latest-content">
          <h3 className="display-4 mb-5 text-light">Latest Posts</h3>
          {/* card wrapper starts here */}
          <div className="card-wrapper">
          {/* single card starts here */}
            <div className="card card-single">
              <div className="">
                <img className="card-img" src={latestImage1} alt="card" />
              </div>
              <div className="p-3">
                <p className="card-text">How To Use Drum Machine in Logic Pro X</p>
              </div>
            </div>
          {/* single card ends here */}
          {/* single card starts here */}
            <div className="card card-single">
              <div className="">
                <img className="card-img" src={latestImage2} alt="card" />
              </div>
              <div className="p-3">
                <p className="card-text">How To Use Drum Machine in Logic Pro X</p>
              </div>
            </div>
          {/* single card ends here */}
          {/* single card starts here */}
            <div className="card card-single">
              <div className="">
                <img className="card-img" src={latestImage3} alt="card" />
              </div>
              <div className="p-3">
                <p className="card-text">How To Use Drum Machine in Logic Pro X</p>
              </div>
            </div>
          {/* single card ends here */}
          </div>
          {/* card wrapper ends here */}
        </div>
      </div>
    </section>
  );
}

export default Latest;
