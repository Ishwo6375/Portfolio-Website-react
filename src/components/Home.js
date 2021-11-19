import React from "react";
import "./styles/Home.css";
import image from "./styles/ishwor.png";

function Home() {
  return (
    <div className="container about">
      <div className="about-content">
        <div className="about-img flex">
          <img src={image} alt="profile-pic" />
        </div>
        <h2>Hello, I'm Ishwor Prajapati</h2>
        <h3>Fullstack Webdeveloper | Learner</h3>
        <blockquote>
          "From Amazon Fulfillment associate to full stack software engineering
          - It was a career change that I would have never thought of. Always
          passionate to create measurable results, through continuous
          improvement, and successful collaborations. Possess solid foundation
          of web development and the ability to conceptualize solutions to
          complex problems. As an immigrant from Nepal I always dreamed to
          achieve something great in the field of technology."
        </blockquote>
      </div>

      <div className="social-icons">
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
