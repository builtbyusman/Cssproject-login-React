import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Login() {
  return (
    <div className="cont">
      <div className="hd">
        <h1>Login Form</h1>
      </div>

      <div className="lnk">
        <button id="fb">
          <FaFacebookF /> Facebook
        </button>
        <button id="tw">
          <FaTwitter /> Twitter
        </button>
      </div>

      <div className="fom">
        <form>
          <input className="op" type="email" placeholder="Email or Phone" />
          <input className="op" type="password" placeholder="Password" />

          <div className="for">
            <div id="rem">
              <input type="checkbox" id="oo" />
              <label htmlFor="oo">Remember me</label>
            </div>
            <div id="anh">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <button type="submit" id="lgn">
            Login
          </button>
        </form>
      </div>

      <div className="pro">
        <a href="#">
          Not a member? <span id="sp">Signup now</span>
        </a>
      </div>
    </div>
  );
}