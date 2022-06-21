import { ReactElement } from "react";

export default function Contact(): ReactElement {
  return (
    <div id="contact" className="text-start mb-5 ">
      <div className="display-4 text-mb-5 mt-5">Contact Me</div>
      <hr/>
      <div className="px-0 mt-3">
        <div className="row justify-content-start">
          <div className="col-4 col-md-1">
            <i className="uil uil-envelope"></i> Email
            <br />
            <i className="uil uil-phone"></i> Phone
            <br />
            <i className="uil uil-linkedin"></i> LinkedIn
            <br />
            <i className="uil uil-github"></i> Github
          </div>
          <div className="col-8 col-md-5">
            robynlamgy@gmail.com
            <br />
            +1(408)768-5974
            <br />
            <a href="https://www.linkedin.com/in/robynlam/">
              {" "}
              https://www.linkedin.com/in/robynlam/
            </a>
            <br />
            <a href="https://github.com/robynlgy">
              {" "}
              https://github.com/robynlgy{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
