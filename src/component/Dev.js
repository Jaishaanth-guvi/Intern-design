import React from "react";
import "./Dev.css";
import pic from "../assets/OBJECTS.svg";

export default function Dev() {
  return (
    <div className="dev">
      <div className="dev-top">
        <div className="pic">
          <img src={pic} />
        </div>
        <div className="dev-title">
          <h2>Why become a Blockchain Developer?</h2>
          <p>
            The demand for blockchain developers is growing daily as they work
            with turbulent and existing technology. Statistics say there was a
            22% increase in demand for that role from 2020-2022, and it's
            expected to double in the following years. Average Salary for a
            Blockchain Developer: 6.5 LPAMax Salary per year for a 5-Year
            Experience Blockchain Developer: 60 LPAEstimated Blockchain Market
            Size by 2026: $34 billion (Growing at the rate of 45% annually)
          </p>
        </div>
      </div>
      <div className="dev-chain">
        <div className="chain-title">
          <h3>Blockchain Developer course Eligibility </h3>
          <div className="chain1-title">
            <ul>
              <li>Basic understanding of programming languages</li>
              <li>
                At least 1+ years of work experience (Preferred but Not
                Mandatory)
              </li>
            </ul>
          </div>
        </div>
        <div className="chain1-title">
          <p>Prerequisites</p>

          <ul>
            <li>Basics of JavaScript</li>
            <li>Basics of Node Js</li>
            <li>Linux & its basic commands.</li>
          </ul>
        </div>
        <div className="check-eb">
          <button>Check Your Eligibility</button>
        </div>
      </div>
    </div>
  );
}
