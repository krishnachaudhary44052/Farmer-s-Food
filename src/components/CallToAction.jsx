import React from "react";
import "../style/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="call-to-action-section">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          {/* Left Column */}
          <div className="col-6 col-lg-6  text-white">
            <h2 className="display-4 fw-bold mb-4">
              STILL NOT <br />
              CONVINCED?
            </h2>
            <p className="lead mb-4">
              Healthy meals, zero hassle. Let's make eating right the
              easiest part of your day.
            </p>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-light text-primary fw-semibold px-4">
                Call us →
              </button>
              <div className="divider-line"></div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                <path d="M10 25C15 20 25 20 30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Column - Image with floating elements */}
          <div className="col-6 col-lg-6 position-relative text-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
              alt="Mobile app mockup"
              className="main-img rounded-4"
            />
            {/* Floating veggies */}
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=100&h=100&fit=crop"
              alt="Broccoli"
              className="floating veggie-1"
            />
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=100&h=100&fit=crop"
              alt="Broccoli"
              className="floating veggie-2"
            />
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=100&h=100&fit=crop"
              alt="Broccoli"
              className="floating veggie-3"
            />
          </div>
        </div>
      </div>

      {/* Background decorative blobs */}
      <div className="decor-bg green-blob"></div>
      <div className="decor-bg orange-blob"></div>
    </section>
  );
};

export default CallToAction;
