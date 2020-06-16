import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import hossam from "./img/hossam.jpg";
import pin from "./img/pin1.png";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="about-text col-md-5">
          <h1 id="hideMe">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>m</span>
            <span>e</span>
          </h1>
          <p>I'm a MERN stack developer specialized in React and Node.js.</p>
          <p>
            I have 1+ years of development experience building fullstack
            products from scratch, developing and integrating APIs, and working
            with a variety of databases.
          </p>
          <p>
            The Front-end use of HTML, CSS, ReactJS and Bootstrap to build a web
            application that can communicate with Back-end.
          </p>
          <p>The Back-end use of Node.JS, Express and MongoDB.</p>
          <p>
            I have serious passion for UI effects, animations and creating
            dynamic user experiences.
          </p>
          <p>
            I have a bachelor's degree in Electronics and Communications
            Engineering.
          </p>
        </div>
        <div className="avatar col-md-5 ">
          <img className="pin" src={pin} alt=""></img>
          <img src={hossam} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default About;
