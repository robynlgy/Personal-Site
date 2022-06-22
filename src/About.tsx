import "./About.css";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "./images/RL-profile-pic.jpeg";

export default function About(): ReactElement {
  return (
    <section id="about" className="text-start pt-5">
      <h2 className="display-4 pt-5">About Me</h2>
      <hr />
      <div className="row">
        <div className="about-text col-md-7 mt-4 order-3 order-md-1">
          <div className="mb-3">
            Hello! My name is Robyn and I am an ex-accountant turned software
            engineer, focusing in full-stack web development.
          </div>
          <div className="my-3">
            The decision to make a career change came as I realized I wanted to
            make a more long-lasting impact in the work I do, while also
            utilizing all the problem solving skills I've gained so far.
            Combined with the aspiration to build my own interactive websites, I
            started dabbling into the world of web development and recently
            graduated from{" "}
            <Link
              to="https://www.rithmschool.com/"
              target="_blank"
              className="link"
            >
              Rithm School
            </Link>
            , a 16-week long full-stack software engineering bootcamp.
          </div>
          <div className="my-3">
          In my previous life, I was an international tax consultant at{" "}
          <Link to="https://www.pwc.com/" target="_blank" className="link">
            PricewaterhouseCoopers
          </Link>{" "}
          where I worked to solved client problems with scenario modeling
          analyses and quantitative solutions.
          </div>
          <div className="my-3">
          Born and raised in Hong Kong, I am now based in San Jose, CA. In my
          free time, you can find me overwatering my plants, cooking, playing
          video games or bothering my cat.
          </div>
          <div className="tech-stack mt-5">
            <div className="h4 mb-2">Tech stack</div>
            <div className="my-1"><b>Languages:</b> JavaScript/TypeScript, Python, SQL, HTML, CSS</div>
            <div className="my-1"><b>Databases:</b> PostgreSQL, AWS S3</div>
            <div className="my-1"><b>Libraries/Frameworks:</b> React, Express, Flask, Jest, Jasmine, Unittest, jQuery, Bootstrap</div>
        </div>
        </div>
        <div className="col-md-1 order-2" />
        <div className="col-md-1 my-2 mt-md-4 pt-md-5 order-1 order-md-3 text-center">
          <img src={ProfilePic} alt="profile" className="profile-pic" />
        </div>
      </div>
      <div className="row">
        <div className="col text-start mt-5">
          <a href="https://docs.google.com/document/d/1JCXXrlIAY3aUjQ_yeFqcgXabX6qaZ7CEH7KsD0yH6MI/edit" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">View Resume</a>
        </div>
      </div>
    </section>
  );
}
