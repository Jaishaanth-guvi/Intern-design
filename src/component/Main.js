import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./main.css";
import guvi from "../assets/Guvi.png";
import google from "../assets/google.png";

export default function Main() {
  return (
    <div className="main">
      <div className="mv1">
        <img src={guvi} />
        <img src={google} />
      </div>
      <div className="course">
        <div className="block">
          <h1>
            <span>Certified </span> Blockchain Professional Course
          </h1>
          <div className="sub1">
            <div className="sub">
              <a>100% Placement Support</a>
              <a>Industry Led Curriculum</a>
              <a>Work on 20+ Projects</a>
              <a>Worldwide accepted Certification</a>
            </div>
            <div className="info1">
              <div className="info">
                <h2>Interested in this course?</h2>
                <form>
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" />
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" />
                  <div className="phone">
                    <label>Phone </label>
                    <PhoneInput
                      country={"in"}
                      preferredCountries={["in"]}
                      enableSearch={true}
                      placeholder="Enter your phone number"
                      inputClass="custom-input"
                      buttonClass="custom-button"
                      containerClass="custom-container"
                    />
                  </div>
                  <div className="btn"></div>
                  <button type="Submit">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
