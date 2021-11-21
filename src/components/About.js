import React from "react";
import about from "./styles/about.jpg";
import "./styles/About.css";

function About() {
  return (
      <div className="main-about">
    <div className="about-intro" id="about">
      <h1 className="heading-1">
        About <span>Me</span>
      </h1>
      <div className="row">
        <div className="image">
          <img className="tilt" src={about} alt="about-section-img" />
        </div>
        <div className="content">
          <h3>
            Hello!! My name is <span>Ishwor Prajapati</span>
          </h3>
          <p className="info">
            <span>"Don't count the days, make the days count." -</span> <span className="span-1">Muhammad Ali</span>
            <br />
             <br />
            Heloo! I'm Ishwor Prajapti, Fullstack webdeveloper based on
            Baltimore, USA. I'm very passionate and dedicated to my work.I love
            spending time on fixing little details and optimizing web apps. Also
            I like working in a team. As the saying goes: "Two heads are better
            than one".
            <br />
            Currently looking for an entry level position.I can't wait to find a
            company where I can make my contribution. Feel free to message me or
            email me at <a href="mailto:ishaan.prazapati6375@gmail.com">ishaan.prazapati6375@gmail.com</a>. I'm always happy to
            talk! :) 
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span>age: </span>28
              </p>
              <p>
                <span>Gender: </span>Male
              </p>
              <p>
                <span>Experience: </span>Entry Level{" "}
              </p>
              <p>
                <span>Freelance: </span>available
              </p>
            </div>

            <div className="box">
              <p>
                <span>Language: </span>English | Nepali | Korean | Nepal Bhasa| Hindi
              </p>
              <p>
                <span>Email: </span>ishaan.prazapti6375@gmail.com
              </p>
              <p>
                <span>Address: </span> Baltimore, USA
              </p>
          <button className="download-btn btn-primary">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
