import React from 'react';
import '../style/DietinHowItWorks.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const steps = [
  { icon: "/image/tapstart.png", title: "Tap to Start", desc: "Touchscreen menu navigation" },
  { icon: "/image/menu.png", title: "Browse Menu", desc: "Scroll by category or top picks" },
  { icon: "/image/meal.png", title: "Know Your Meal", desc: "Ingredients, nutrition & allergens visible instantly" },
  { icon: "/image/cart.png", title: "Add to Cart", desc: "Select one or more items" },
  { icon: "/image/pay.png", title: "Checkout & Pay", desc: "Card swipe / PayTM / UPI" },
  { icon: "/image/go.png", title: "Grab-n-Go", desc: "Food is vended in seconds" },
];

const DietinHowItWorks = () => {
  return (
    <div className="howit-container container mt-5">
      <h2 className="main-heading">HOW IT WORKS:</h2>
      <p className="tagline">TAP. TASTE. THRIVE.</p>

      <div className="row mt-4 align-items-start">
        <div className="col-md-6">
          <img src="./image/sideimage.png" alt="How it works" className=" rounded howit-img" />
        </div>

        <div className="col-md-6 gap-5 py-2">
          <ul className="steps-list py-2">
            {steps.map((step, index) => (
              <li key={index} className="step-item d-flex align-items-start mb-4">
                <img src={step.icon} alt={step.title} className="step-icon me-3" />
                <div className='py-1'>
                  <strong>{step.title}</strong><br />
                  <span>{step.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="bubble-note py-4">
            <strong>Fridge is temperature-controlled & smart:</strong><br />
            Only vends food within freshness window<br />
            Auto-alerts for refills or spoilage<br />
            Zero-contact experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietinHowItWorks;
