import React from "react";
import Main from "./component/Main";
import Maindown from "./component/Main-down";
import Pic from "./component/Pic";
import Phase1 from "./component/Phase1";
import High from "./component/High";
import Dev from "./component/Dev";
import Tech from "./component/Tech";
import Modules from "./component/Modules";
import Last from "./component/Last";
import "./App.css";
import Syllabus from "./component/Syllabus";
import Start from "./component/Start";
import vector1 from "./assets/vector1.png";
import Vector2 from "./component/Vector2";
import Vector3 from "./component/Vector3";
import Vector4 from "./component/Vector4";
import Vector1 from "./component/Vector1";

export default function App() {
  return (
    <div className="App">
      <Vector1 />
      <Vector2 />
      <Vector3 />
      <Vector4 />

      {/*<Start />
      <div className="vector1">
        <div className="fix">
          <Main />
          <Maindown />
          <Pic />
          <Phase1 />
        </div>
      </div>*/}

      {/*<Phase1 />
       <High />
      <Dev />
      <Tech />
      <Syllabus />
      <Last />*/}
    </div>
  );
}
