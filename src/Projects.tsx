import "./Projects.css";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import jobly1 from "./images/jobly/HomepageLoggedIn.png";
import jobly2 from "./images/jobly/Companies.png";
import jobly3 from "./images/jobly/CompanyDetail.png";
import jobly4 from "./images/jobly/Jobs.png";
import jobly5 from "./images/jobly/Profile.png";
import warbler1 from "./images/warbler/Homepage.png";
import warbler2 from "./images/warbler/Profile.png";
import warbler3 from "./images/warbler/Main.png";
import warbler4 from "./images/warbler/Users.png";
import warbler5 from "./images/warbler/Signup.png";

export default function Projects(): ReactElement {
  return (
    <section id="projects" className="text-start">
      <h2 className="display-4 pt-5">Projects</h2>
      <hr />
      <div className="row justify-content-around mt-5">
        {/* JOBLY */}
        <div className="card col-md-5 bg-light">
          <Carousel className="mt-2">
            <Carousel.Item>
              <img
                src={jobly1}
                className="d-block w-100 rounded"
                alt="Jobly homepage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={jobly2}
                className="d-block w-100 rounded"
                alt="Jobly companies"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={jobly3}
                className="d-block w-100 rounded"
                alt="Jobly comp details"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={jobly4}
                className="d-block w-100 rounded"
                alt="Jobly jobs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={jobly5}
                className="d-block w-100 rounded"
                alt="Jobly profile"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Jobly</h5>
            <p className="card-text">
              A fullstack job search application built with a React front-end, Express RESTful API and PostgreSQL database. The API includes full CRUD capabilties on companies, jobs and users and the option to filter by queries. Authorization is required for both front and back-end for select endpoints.
            </p>
            <div className="text-center">
              <Link to="https://jobly-robyn.surge.sh/" className="btn btn-dark mx-2">
                View Demo
              </Link>
              <Link to="https://github.com/robynlgy/react-jobly" className="btn btn-dark mx-2">
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* Warbler */}
        <div className="card col-md-5 bg-light">
          <Carousel className="mt-2">
            <Carousel.Item>
              <img
                src={warbler1}
                className="d-block w-100 rounded"
                alt="Warbler homepage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={warbler2}
                className="d-block w-100 rounded"
                alt="Warbler Profile"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={warbler3}
                className="d-block w-100 rounded"
                alt="Warbler Main"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={warbler4}
                className="d-block w-100 rounded"
                alt="Warbler Users"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={warbler5}
                className="d-block w-100 rounded"
                alt="Warbler Signup"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Warbler</h5>
            <p className="card-text">
           A full-stack Twitter clone application. Users can create an account, search for and follow/unfollow other users, like/dislike messages from other users, and perform CRUD operations on their own messages. Authorization is required to access the main contents of the app.
            </p>
            <div className="text-center">
              <Link to="https://warbler-demo-050822.herokuapp.com/" className="btn btn-dark mx-2">
                View Demo
              </Link>
              <Link to="https://github.com/robynlgy/Flask-warbler" className="btn btn-dark mx-2">
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
