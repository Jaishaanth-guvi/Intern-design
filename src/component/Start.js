import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils";
import "./main.css";
import guvi from "../assets/Guvi.png";
import google from "../assets/google.png";

export default function Start() {
  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const iti = intlTelInput(inputRef.current, {
        initialCountry: "us",
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input/build/js/utils.js",
      });

      // Reorder the elements (flag -> country code -> dropdown)
      const flagContainer = inputRef.current.parentNode.querySelector(
        ".iti__flag-container"
      );
      const dialCodeElement = inputRef.current.parentNode.querySelector(
        ".iti__selected-dial-code"
      );
      const dropdownArrow =
        inputRef.current.parentNode.querySelector(".iti__arrow");

      // Append the dropdown arrow after the dial code
      dialCodeElement.parentNode.insertBefore(dropdownArrow, null);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Phone:", phone);
  };
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
                    <input
                      ref={inputRef}
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className="btn"></div>
                  <button type="submit">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
