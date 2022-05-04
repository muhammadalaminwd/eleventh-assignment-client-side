import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="bg-success">
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <p className="pr-5 text-white-50">
                We keep fresh vegetables and fruits. We are the best vegetables warehouse in Bangladesh with thousands of happy customer. We will provide you fully fresh and healthy vegetables in 24 hours. So try us. Client satisfiction is our main priority. If our client is happy, we are happy. If you need further information, just a call or a message away. Have a good day!
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <ul className="m-0 p-0">
                <li className="mb-2">
                  <a
                    class="text-decoration-none text-light"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a class="text-decoration-none text-light" href="/home#items">
                    Items
                  </a>
                </li>
                <li className="mb-2">
                  <a class="text-decoration-none text-light" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a class="text-decoration-none text-light" href="/about">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a class="text-decoration-none text-light" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location text-white">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>Block-D, Banani, Dhaka-1204</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>(02) 2334-0014
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>info@freshwarehouse
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
