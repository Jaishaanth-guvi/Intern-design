import React from 'react'
import "./Last.css"
import final1 from "../assets/final1.png"
import final2 from "../assets/final2.png";

export default function Last() {
  return (
    <div className="final">
      <div className="final-head">
        <h2>Blockchain Projects that you will work</h2>
      </div>
      <div className="final-pic">
        <img src={final1}/>
        <img src={final2}/>
      </div>
    </div>
  );
}
