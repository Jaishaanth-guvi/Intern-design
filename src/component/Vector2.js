import React from "react";
import Phase1 from "./Phase1";
import High from "./High";
import "./Vector2.css";
import vector2 from "../assets/vector2.png";

export default function Vector2() {
  return (
    <div className="vector2">
      <div className="fit">
        <Phase1 />
        <High />
      </div>
    </div>
  );
}
