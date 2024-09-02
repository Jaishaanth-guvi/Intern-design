import React from "react";
import Main from "./Main";
import Maindown from "./Main-down";
import Pic from "./Pic";
import "./Vector.css";

export default function Vector1() {
  return (
    <div className="vector1">
      <div className="fix">
        <Main />
        <Maindown />
        <Pic />
      </div>
    </div>
  );
}
