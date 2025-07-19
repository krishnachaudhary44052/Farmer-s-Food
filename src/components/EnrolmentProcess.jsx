import React, { useEffect, useRef, useState } from "react";
import "../style/EnrolmentProcess.css";

const steps = [
    "FILL THE FORM OR YOU CAN SMS YOUR (NAME) SPACE (AGE) SPACE (CITY) AND SEND IT TO 7837780318",
    "Expert will get in touch with you as per given slot.",
    "You have to choose your Plan.",
    "A group is created with experts and your diet starts."
];

const EnrolmentProcess = () => {
    const lineRef = useRef(null);
    const sectionRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    const handleScroll = () => {
        if (!sectionRef.current || !lineRef.current) return;

        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        let scrolled = Math.min(
            Math.max(windowHeight - sectionTop, 0),
            sectionHeight
        );
        setLineHeight(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container position-relative" ref={sectionRef}>
                <div className="row">
                    {/* Left Side: Enrollment Steps */}
                    <div className="col-md-6 position-relative">
                        <h3 className="section-title">HOW TO GET ENROLLED WITH DIETIN</h3>
                        <div className="step-wrapper">
                            {steps.map((text, index) => (
                                <div className="step-card card shadow-sm mb-4" key={index}>
                                    <div className="card-body">
                                        <h5><strong>STEP {index + 1}</strong></h5>
                                        <p className="mb-0">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Vertical Line */}
                        <div
                            className="timeline-vertical"
                            ref={lineRef}
                            style={{ height: `${lineHeight}px` }}
                        >
                            {[...Array(4)].map((_, idx) => (
                                <div className="timeline-dot" key={idx}>
                                    <i className="bi bi-pencil-fill text-white"></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="contact-card card shadow">
                            <div className="card-body">
                                <h3 className="text-center text-primary fw-bold">Get In Touch</h3>
                                <p className="text-center text-muted small">
                                    Office Hours: 10:00 am to 5:00 pm Mon to Sat
                                </p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Enter your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Enter your Email" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Enter your City" />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your Number"
                                                maxLength={10}
                                                inputMode="numeric"
                                                pattern="\d{10}"
                                                onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/\D/g, '');
                                                }}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Enter your Age" />
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option>Enter your Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option>What's your Goal?</option>
                                                <option>Weight Loss</option>
                                                <option>Muscle Gain</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option>Preferred Time for Call</option>
                                                <option>10am - 1pm</option>
                                                <option>2pm - 5pm</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="3" placeholder="Enter your Message"></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-warning px-4 mt-3 fw-bold">Book Consultation Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnrolmentProcess;