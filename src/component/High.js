import React from "react";
import "./High.css";

export default function High() {
  return (
    <div className="high">
      <div className="title">
        <h3>Blockchain course Highlights </h3>
      </div>

      <div className="chain">
        <div className="chain1">
          <ul>
            <li>A program designed by Experts from the industry </li>
            <li>Live weekend Online Classes + Lifetime recorded videos</li>
            <li>Instant Doubt clearing sessions with Mentors</li>
            <li>Globally recognised certification</li>
          </ul>
        </div>
        <div className="chain2">
          <ul>
            <li>Work on real-life Industry Projects</li>
            <li>100% Job Placement Support & 50+ Interviews Guaranteed</li>
            <li>EMI options available with a 7-day Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="enroll">
        <button>Enroll now</button>
      </div>
    </div>
  );
}
