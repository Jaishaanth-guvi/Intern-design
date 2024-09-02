import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Syllabus.css";

function Syllabus() {
  return (
    <div className="syllabus">
      <div className="syllabus_content">
        <div className="accor">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>Module 1: </span> JavaScript & Node.js
              </Accordion.Header>
              <Accordion.Body>
                Basics of JavaScript & Node.js Introduction
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span>Module 2: </span> Blockchain Fundamentals
              </Accordion.Header>
              <Accordion.Body>Blockchain Fundamentals</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span>Module 3:</span> Blockchain In-depth
              </Accordion.Header>
              <Accordion.Body>Blockchain In-depth</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <span>Module 4:</span> Bitcoin & Crypto
              </Accordion.Header>
              <Accordion.Body>Bitcoin & Crypto</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <span>Module 5:</span> Ethereum
              </Accordion.Header>
              <Accordion.Body>Ethereum</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <span>Module 6:</span> Smart contract
              </Accordion.Header>
              <Accordion.Body>Smart contract</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <span>Module 7:</span> Tokens
              </Accordion.Header>
              <Accordion.Body>Tokens</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <span>Module 8:</span> Polygon, Defi & Web3.js
              </Accordion.Header>
              <Accordion.Body>Polygon, Defi & Web3.js</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <span>Module 9:</span> Private Blockchain
              </Accordion.Header>
              <Accordion.Body>Private Blockchain</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <span>Module 10:</span> General
              </Accordion.Header>
              <Accordion.Body>General</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <button className="syl_btn">Download Detailed Syllabus</button>
      </div>
    </div>
  );
}

export default Syllabus;
