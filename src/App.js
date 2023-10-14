
import React from "react";
import { useState } from "react";
import resume from './resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import './App.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DispalyResume() {
  return (
    <div>
      <Document
        file = {resume}
        style={{ maxWidth: '100%', height: 'auto' }}
        >
        <Page pageIndex={0} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
    </div>
  );
}
  
  
  function ResumeButton() {
    const [show, setShow] = useState(false);
    return (
      <div className="App">
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Resume
        </button>
        {show ? <DispalyResume /> : null}
      </div>
    );
  }

  
function App(){

    const [project3Expanded, setProject3Expanded] = useState(false);
  
    const toggleProject3 = () => {
      setProject3Expanded(!project3Expanded);
    };

return <>
    
  <body>
      <header>
          <h1>Molly Chen</h1>
          <p>Software Engineer & Web Developer</p>
      </header>
      <div className="container">
          <div className="section">
              <h2>About Me</h2>
              <p>
              I graduated from Columbia University with a degree in Computer Science. 
              I'm a passionate Software Engineer and web developer, known for creating eye-catching, user-friendly websites and adding cool features to existing platforms.
              I'm dedicated to always providing high-quality solutions.
              </p>
          </div>
          <div className="section">
              <h2>Skills</h2>
              <ul>
                  <li>Python, C++</li>
                  <li>SQL</li>
                  <li>HTML, CSS, JavaScript, jQuery</li>
                  <li>Responsive Web Design</li>
                  <li>UI/UX Design</li>
                  <li>Front-end Frameworks (e.g., React, Django)</li>
                  <li>Vim, TCP/IP, AWS, Git</li>
                  <li>Machine Learning, Artificial Intelligence</li>
              </ul>
          </div>
          <div className="section">
              <h2>Portfolio</h2>
              <p>Here are some of my recent projects:</p>
              <ul>
                  <li><a href="https://youtu.be/EGSHC1KKh3w">Housing Scam Detector</a></li>
                  <li><a href="https://youtu.be/M8GNRxHtG2o">Movie Web application</a></li>
                  <li><a href="https://youtu.be/ZTfTOUIqcMU">Microservice for Users</a></li>
                  <li>
                    <a href="#" onClick={toggleProject3}>TCP/IP Server</a>
                    {project3Expanded && (
                        <ul>
                        <li><a href="https://youtu.be/yTPx9ziEMbA">Two programs Share Information</a></li>
                        <li><a href="https://youtu.be/1mNxcviDlqc">CRUD Operations</a></li>
                        <li><a href="https://youtu.be/zq8BFJYbGes">Display Database on Web Broswer</a></li>
                        <li><a href="https://youtu.be/urQdSW2Ti3E">Multiple Thread with One Port</a></li>
                        <li><a href="https://youtu.be/KfTk5WvIuaU">Multiple Thread multiple ports</a></li>
                        </ul>
                    )}
            </li>
              </ul>
          </div>

          <div className="section">
              <h2>Resume</h2>
              <p><ResumeButton/></p>
          </div>

          <div className="section">
              <h2>Contact Information</h2>
              <p>Email: mollychen217@gmail.com</p>
              <p>LinkedIn: www.linkedin.com/in/xyc</p>
          </div>
      </div>
  </body>
  </>
  }


  export default App;