import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NoMealSection.css"; // External animation styles

const NoMealSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="container-fluid px-4 px-lg-5 align-items-center">        
        <div className="row align-items-center gy-5">
          {/* Left Card */}
          <div className="col-lg-6 animate-left">
            <h2 className="display-5 fw-bold text-primary mb-3">
              No Plan? <br /> No Problem!
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Don't have a diet plan? <br /> Don't worry, we got you.
            </p>
            <button className="btn btn-warning text-white px-4 py-2 mb-4">
              Consult Now
            </button>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop"
                alt="Fresh vegetables"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6 animate-right">
            <h2 className="display-5 fw-bold text-primary mb-3">BYOD</h2>
            <p className="text-secondary fs-5 mb-4">
              Bring your own <br /> diet chart
            </p>
            <button className="btn btn-warning text-white px-4 py-2 mb-4 d-flex align-items-center">
              Upload Diet Plan
              <svg
                className="ms-2"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7l10-10M7 7l10 10M7 7H3l4 4"
                />
              </svg>
            </button>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop"
                alt="Fresh salad"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NoMealSection;
