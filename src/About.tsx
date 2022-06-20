import "./About.css";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import ProfilePic from './RL-profile-pic.jpeg';

export default function About(): ReactElement {
  return (
    <section id="about" className="text-start">
      <h2 className="display-4 pt-5">About Me</h2>
      <hr />
      <div className="row">
        <div className="about-text col-6 mt-5">
          Hello! My name is Robyn and I am an ex-accountant turned software
          engineer, focusing in full-stack web development.
          <br />
          <br />
          The decision to make a career change came as I realized I wanted to
          make a more long-lasting impact in the work I do, while also utilizing
          all the problem solving skills I've gained so far. Combined with the
          aspiration to build my own interactive websites, I started dabbling
          into the world of web development and recently graduated from{" "}
          <Link
            to="https://www.rithmschool.com/"
            target="_blank"
            className="link"
          >
            Rithm School
          </Link>
          , a 16-week long full-stack software engineering bootcamp.
          <br />
          <br />
          In my previous life, I was an international tax consultant at{" "}
          <Link to="https://www.pwc.com/" target="_blank" className="link">
            PricewaterhouseCoopers
          </Link>{" "}
          where I worked to solved client problems with scenario modeling
          analyses and quantitative solutions.
          <br />
          <br />
          Born and raised in Hong Kong, I am now based in San Jose, CA. In my
          free time, you can find me overwatering my plants, cooking, playing
          video games or bothering my cat.
        </div>
        <div className="col-2"/>
        <div className="col-2 mt-5 pt-5">
            <img src={ProfilePic} alt="profile" className="profile-pic"/>
        </div>
      </div>
    </section>
  )
}