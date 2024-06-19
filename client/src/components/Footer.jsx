import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <i class="fab fa-slack"></i>
            <img src="./footer-logo.png" alt="footer logo" />
          </div>
          <div class="media-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Links</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Services</li>
            <li>
              <a href="#">Mathematics</a>
            </li>
            <li>
              <a href="#">Language Arts</a>
            </li>
            <li>
              <a href="#">Physical Education</a>
            </li>
            <li>
              <a href="#">Art & Music....</a>
            </li>
          </ul>

          <ul class="box input-box">
            <li class="link_name">Subscribe</li>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <input type="button" value="Subscribe" />
            </li>
          </ul>
        </div>
        <span
          style={{
            color: "white",
            position: "relative",
            bottom: "-40px",
            fontWeight: "100",
          }}
        >
          Address: Midway, Gofa to German Square, Addis Ababa, Ethiopia
        </span>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright © 2024 <a href="#"> Destiny Future Academy.</a>All rights
            reserved
          </span>
          <span class="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
