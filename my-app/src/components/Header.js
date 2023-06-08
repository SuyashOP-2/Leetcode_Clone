import React from "react";
import { Link } from 'react-router-dom';
import leetcode from "../assets/leetcode.svg";
import store from "../assets/store.png";
import bell from "../assets/bell.png";
import flame from "../assets/flame.png";
import user from "../assets/user.png";

import "./header.css";

const Header = () => {
  return (
    <div className="main">
      <div className="sub1">
        <ul>
          <img
            src={leetcode}
            alt="LeetCode Logo"
            style={{ height: "40px", width: "90px" }}
          />
          <li>
            <Link to="/">Explore</Link>
          </li>
          <li>
            <Link to="/problems">Problems</Link>
          </li>
          <li>
            <Link to="/interview">Interview</Link>
          </li>
          <li>
            <Link to="/contest">Contest</Link>
          </li>
          <li>
            <Link to="/discuss">Discuss</Link>
          </li>
          <li className="store-link">
            <img
              src={store}
              alt="Store Icon"  
              style={{
                color: "#fO7C18",
                width: "20px",
                height: "17px",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />  
            <Link to="/store">Store</Link>
          </li>
        </ul>
        <div className="sub2">
          <ul>
            <li>Premium</li>
            <li>
              <img
                src={bell}
                alt="Bell Icon"
                style={{
                  width: "20px",
                  height: "17px",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              />
            </li>
            <li>
              <img
                src={flame}
                alt="Bell Icon"
                style={{
                  width: "20px",
                  height: "17px",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              />
            </li>
            <li>
              <img
                src={user}
                alt="Bell Icon"
                style={{
                  width: "20px",
                  height: "17px",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="banner">
        In an effort to fight COVID-19, from now until a limited time only,
        users residing in India can enjoy discount on both
        <span
          className="subscription-text"
          style={{ color: "#40a9ff", backgroundColor: "#fcf8e3" }}
        >
          {" "}
          monthly and annual subscriptions
        </span>
        !
      </div>
    </div>
  );
};

export default Header;
