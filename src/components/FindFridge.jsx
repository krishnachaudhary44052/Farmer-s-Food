import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/FindFridge.css';

const FindFridge = () => {
  return (
    <>
      <div className=' find-fridge-container container-fluid '>


        <div className=" container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h2 className="fridge-heading fw-bold fst-italic">
                About us-<br />DietIn
              </h2>
              <p className="text-muted">
                At Dietin, we believe healthy eating should feel simple, natural, and joyful—not like a chore. In today’s fast-paced world, convenience often wins over nutrition, and we’re here to change that narrative.
                <br />
              </p>
              <p className="text-muted">
                We’re not just a food brand. We’re a health-first movement built on the idea that everyone deserves access to meals that nourish the body, mind, and soul—no matter where they are or how packed their day looks.
                <br />
              </p>
              <p className="text-muted">
                <b>To bring this vision to life, we introduced two core solutions:
                </b><br />
              </p>
              <p className="text-muted">
                Dietin Freeze – our smart, tech-enabled fridges placed across high-traffic and work-heavy zones like offices, hospitals, colleges, and transit hubs. Stocked daily with freshly made, nutrition-rich meals, they make eating well as easy as grabbing a snack.
                <br />
              </p>
              <p className="text-muted">
                Dietin Daily – our personalized subscription program that tailors meals to your health goals. Whether you're managing weight, boosting immunity, improving gut health, or following therapeutic diets for conditions like diabetes, PCOS, or hypertension—Dietin Daily delivers curated, chef-crafted meals to fuel your journey with purpose and flavor.
                <br />
              </p>
              <p className="text-muted">

                Because at the heart of Dietin is a simple promise:
                Real food. Real nutrition. Right when you need it.<br />
              </p>

            </div>

            <div className="col-lg-6 col-md-12 text-center">
              <img
                src="/image/08.jpg"
                alt="Farmer’s Fridge"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindFridge;
