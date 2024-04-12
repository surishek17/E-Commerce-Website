import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../assest/logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-yellow-200 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col md:flex-row justify-between">
        {/* Section 1: Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img
              src={logo}
              className=""
              style={{ height: "100px" }}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Section 2: About, Privacy Policy, and Contact Links */}
        <div className="mb-6 md:mb-0">
          <h3
            style={{
              fontSize: "1.3rem",
              color: "black",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "0.5rem 0",
            }}
          >
            About shop
          </h3>
          <ul className="flex flex-col text-sm font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-2">
              <Link
                to="/about"
                className="hover:underline"
                style={{ fontSize: "1.1rem", padding: "0.5rem 0" }}
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/privacy"
                className="hover:underline"
                style={{ fontSize: "1.1rem", padding: "0.5rem 0" }}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
                style={{ fontSize: "1.1rem", padding: "0.5rem 0" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media Icons */}
        <div className="cursor-pointer flex items-center mb-4 md:mb-0">
          <FaFacebook className="me-3" style={{ color: "#3b5998" }} size={50} />
          <FaTwitter className="me-3 " style={{ color: "#55acee" }} size={50} />
          <FaYoutube className="me-3" size={50} style={{ color: "#ed302f" }} />
          <IoLogoInstagram style={{ color: "#bc2a8d" }} size={50} />
        </div>

        {/* Section 4: Customer Support Contact Information */}
        <div className="mb-4 md:mb-0">
          <div>
            <h3
              style={{ fontSize: "1.5rem", color: "black", fontWeight: "bold" }}
            >
              Customer support
            </h3>
            <h4 className="text-success">+91-85580-30604</h4>
          </div>
          <div>
            <p className="text-secondary m-0 mt-3">
              Mon. - Fri. <b>10:00 - 7:00</b>
            </p>
            <p className="text-secondary">
              Sat. - Sun. <b>Off</b>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 w-fullsm:mx-auto  dark:border-gray-700 lg:my-8" />
      {/* Section 5: All Rights Reserved */}
      <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="inline-block">BlinkIt. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
