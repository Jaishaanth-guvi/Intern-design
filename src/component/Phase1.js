import React from 'react'
import "./phase1.css"
import right from "../assets/Right1.svg"

export default function Phase1() {
  return (
    <div className="head">
      <div className="left">
        <div className="left1">
          <h2>Become a Blockchain Developer with Our Blockchain Course </h2>
        </div>
        <div className="left2">
          <p>
            GUVI’s Certified Blockchain developer course is a leading-edge
            Technological program introduced to make the fantastical possible
            and make one of the most spoken, the least understood topics
            graspable yet. It io a Live Online course from GUVI, an IIT-Madras
            incubated company. Instructed by the industry’s best Technical
            Experts & Founders(Ex-Paypal Employees), this program offers
            mentorship through Blockchain Experts and directs you to Fortune 500
            companies. The vision is to make premium organisations discover the
            Right talent through GUVI’s Zen Class.
          </p>
        </div>
      </div>

      <div className="contain">
        <img src={right} />
      </div>
    </div>
  );
}
