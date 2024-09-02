import React, { useState } from "react";
import "./Modules.css"; // Ensure you have a CSS file for styles

const CourseSyllabus = () => {
  const [activeModule, setActiveModule] = useState(null);

  const syllabus = [
    {
      title: "Module 1: JavaScript & Node.js",
      content: "Basics of JavaScript & Node.js Introduction",
    },
    {
      title: "Module 2: Blockchain Fundamentals",
      content: "Blockchain Basics",
    },
    {
      title: "Module 3: Blockchain In-depth",
      content: "Advanced Blockchain Topics",
    },
    {
      title: "Module 4: Bitcoin & Crypto",
      content: "Bitcoin and Cryptocurrency Basics",
    },
    { title: "Module 5: Ethereum", content: "Ethereum Platform Overview" },
    {
      title: "Module 6: Smart Contract",
      content: "Smart Contract Development",
    },
    { title: "Module 7: Tokens", content: "Tokenomics and Token Development" },
    {
      title: "Module 8: Polygon, DeFi & Web3.js",
      content: "Exploring Polygon and DeFi with Web3.js",
    },
    {
      title: "Module 9: Private Blockchain",
      content: "Setting up a Private Blockchain",
    },
    { title: "Module 10: General", content: "General Blockchain Topics" },
  ];

  const handleToggle = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className="course-syllabus">
      <div className="modules">
        {syllabus.map((module, index) => (
          <div key={index} className="module">
            <div className="module-header" onClick={() => handleToggle(index)}>
              <h3>{module.title}</h3>
            </div>
            {activeModule === index && (
              <div className="module-content">{module.content}</div>
            )}
          </div>
        ))}
      </div>
      <button className="download-button">Download Detailed Syllabus</button>
    </div>
  );
};

export default CourseSyllabus;
