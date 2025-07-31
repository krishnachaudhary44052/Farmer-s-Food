import React from 'react';
import '../style/DietinCorporateNeeds.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const DietinCorporateNeeds = () => {
    return (<>
        <div className='container'>
            <div className=' row'>
                <div className="col-lg-6  mt-5">
                    <h2 className="main-heading mt-4">WHAT WE NEED FROM <span className="red">CORPORATES</span></h2>

                    <ul className="needs-list mt-3">
                        <li>A designated space with power socket</li>
                        <li>Internal communication to introduce the DIETIN FREEZE</li>
                        <li>Feedback loop to improve offerings</li>
                    </ul>

                    <p className="conclusion mt-3">That’s it — leave the rest to us.</p>
                    <p className="footer-text mt-4 text-start">
                        Dietin Freeze isn’t just another perk. It’s your way of saying — “we care.”
                    </p>

                    <div className="contact-box text-start mt-3">
                        <p>Now, let’s bring health to work. One jar at a time.</p>
                        <p>📞 <strong>Contact: +91 9711808337</strong></p>
                        <p>🌐 <a href="#" target="_blank" rel="noreferrer">www.dietin.in</a></p>
                        <p>📍 Available PAN India</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="text-center mt-4">
                        <img src="./image/corporate.png" alt="Looking for Corporates" className=" corporate-img" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default DietinCorporateNeeds;
