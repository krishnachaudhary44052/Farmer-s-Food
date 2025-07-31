import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/MealPlan.css";

const MealPlans = () => {
  const plans = [
    {
      title: "STUDENT MEAL PLAN",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    },
    {
      title: "FAST TRACK WEIGHT LOSS",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
    },
    {
      title: "GYM AND SPORTS PLAN",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "PREGNANCY & LACTATION PLAN",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "THERAPEUTIC PLANS",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=400&h=300&fit=crop"
    },
    {
      title: "WEIGHT MANAGEMENT PLAN",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold">
            <span className="text-primary">Choose Your Perfect </span>
            <span className="text-success">Plan</span>
          </h2>
          <p className="text-secondary">
            We offer 8 signature meal plans designed for every phase of life and every goal
          </p>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={plan.image} alt={plan.title} className="card-img" />
                    <div className="overlay">
                      <h5 className="text-white text-center">{plan.title}</h5>
                    </div>
                  </div>
                  <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                    <h5>{plan.title}</h5>
                    <button className="btn btn-success mt-3">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
