import React from 'react';
import './Commit.css';
import commitImg1 from './CommitImg/Rectangle 19 (2).png';
import commitImg2 from './CommitImg/Rectangle 19 (1).png';
import commitImg3 from './CommitImg/Rectangle 19.png';

function Commit() {
  return (
    <section className="commit py-5">
      <div className="container">
        <div className="commit-content">
          <h3 className="display-4 mb-5 text-light">What our student say</h3>
          {/* commit wrapper starts here */}
          <div className="commit-wrapper">
            {/* commit single starts here */}
            <div className="commit-single">
              <div className="commit-img">
                <img src={commitImg1} alt="commit" />
              </div>
              <div className="commit-body mt-3">
                <h5 className="commit-title">Adams</h5>
                <p className="commit-des">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
            {/* commit single ends here */}
            {/* commit single starts here */}
            <div className="commit-single">
              <div className="commit-img">
                <img src={commitImg2} alt="commit" />
              </div>
              <div className="commit-body mt-3">
                <h5 className="commit-title">Adams</h5>
                <p className="commit-des">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
            {/* commit single ends here */}
            {/* commit single starts here */}
            <div className="commit-single">
              <div className="commit-img">
                <img src={commitImg3} alt="commit" />
              </div>
              <div className="commit-body mt-3">
                <h5 className="commit-title">Adams</h5>
                <p className="commit-des">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
            {/* commit single ends here */}

          </div>
          {/* commit wrapper ends here */}

        </div>
      </div>
    </section>
  );
}

export default Commit;
