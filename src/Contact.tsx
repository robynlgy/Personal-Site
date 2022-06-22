import { ReactElement } from "react";

export default function Contact(): ReactElement {
  return (
    <div id="contact" className="text-start pb-5 ">
      <div className="display-4 text-mb-5 mt-5">Contact Me</div>
      <hr />
      <div className="px-0 mt-3">
        <div className="text-start my-5">
          <div className="my-1">
            <b><i className="uil uil-envelope d-inline"></i> Email:</b> robynlamgy@gmail.com
          </div>
          <div className="my-1">
            <b><i className="uil uil-phone"></i> Phone:</b> +1(408)768-5974
          </div>
          <div>
            <div className="my-1">
              <a href="https://www.linkedin.com/in/robynlam/">
                <b><i className="uil uil-linkedin"></i> LinkedIn:</b> https://www.linkedin.com/in/robynlam/
              </a>
            </div>
            <div className="my-1">
              <a href="https://github.com/robynlgy">
               <b><i className="uil uil-github"></i> Github:</b> https://github.com/robynlgy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
