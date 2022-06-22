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
import sharebnb1 from "./images/sharebnb/Homepage.png";
import sharebnb2 from "./images/sharebnb/Listings.png";
import sharebnb3 from "./images/sharebnb/AddListings.png";
import productiv1 from "./images/productiv/Landing.png";
import productiv2 from "./images/productiv/AddTodo.png";
import productiv3 from "./images/productiv/AddedTodo.png";

export default function Projects(): ReactElement {
  return (
    <section id="projects" className="text-start pt-5">
      <h2 className="display-4 pt-5">Projects</h2>
      <hr />
      <div className="row justify-content-around mt-2 card-deck">
        {/* JOBLY */}
        <div className="col-xxl-3 col-md-6 px-1">
        <div className="card bg-light my-2 mx-0">
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
              <a href="https://jobly-robyn.surge.sh/" className="btn btn-outline-dark mx-2">
                View Demo
              </a>
              <a href="https://github.com/robynlgy/react-jobly" className="btn btn-outline-dark mx-2">
                Github
              </a>
            </div>
          </div>
        </div>
        </div>

        {/* Warbler */}
        <div className="col-xxl-3 col-md-6 px-1">
        <div className="card bg-light my-2">
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
              <a href="https://warbler-demo-050822.herokuapp.com/" className="btn btn-outline-dark mx-2">
                View Demo
              </a>
              <a href="https://github.com/robynlgy/Flask-warbler" className="btn btn-outline-dark mx-2">
                Github
              </a>
            </div>
          </div>
        </div>
        </div>
        {/* ShareBnB */}
        <div className="col-xxl-3 col-md-6 px-1">
        <div className="card bg-light my-2">
          <Carousel className="mt-2">
            <Carousel.Item>
              <img
                src={sharebnb1}
                className="d-block w-100 rounded"
                alt="Sharebnb homepage"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={sharebnb2}
                className="d-block w-100 rounded"
                alt="Sharebnb listings"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={sharebnb3}
                className="d-block w-100 rounded"
                alt="Sharebnb new listings"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">ShareBnB</h5>
            <p className="card-text">
            A full stack application with React frontend and a RESTful API backend to register user accounts, create and edit listings with image upload functionality. Images are saved to Amazon S3 bucket while rest of the data is saved to a PostgreSQL database.
            </p>
            <div className="text-center">
              <a href="https://github.com/robynlgy/ShareBnB" className="btn btn-outline-dark mx-2">
                Github
              </a>
            </div>
          </div>
        </div>
        </div>
        {/* Productiv */}
        <div className="col-xxl-3 col-md-6 px-1">
        <div className="card bg-light my-2">
          <Carousel className="mt-2">
            <Carousel.Item>
              <img
                src={productiv1}
                className="d-block w-100 rounded"
                alt="Productiv landing page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={productiv2}
                className="d-block w-100 rounded"
                alt="productiv new todo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={productiv3}
                className="d-block w-100 rounded"
                alt="productiv added new todo"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Prøductïv</h5>
            <p className="card-text">
            Productiv is a todo list built with React. Users can create and edit todos with descriptions and set priorities. Users can also get productive quotes from inspo-quotes!
            </p>
            <div className="text-center">
              <a href="https://github.com/robynlgy/react-productiv" className="btn btn-outline-dark mx-2">
                Github
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
