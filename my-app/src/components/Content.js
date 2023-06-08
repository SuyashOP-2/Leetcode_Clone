import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";
import content from "./content.css";
import siuu from "../assets/siuu.png";
import Cup from "../assets/Cup.png"

const Content = () => {
  return (
    <div className="andrew">
      <div className="mira1">
        <ul className="custom-ul">
          <FontAwesomeIcon
            icon={faTrophy}
            style={{ color: "#f9a825", width: "30px", height: "28px" }}
          />
          <div className="contest-info">
            <li style={{ color: "#afafaf", fontSize: "14px" }}>in 8 days</li>
            <li style={{ color: "black", fontWeight: "600", fontSize: "14px" }}>
              Join our Contest{" "}
              <span style={{ color: "#40A9FF" }}>Biweekly Contest 106</span>
            </li>
          </div>
        </ul>
        <div className="line-container">
          <hr style={{ opacity: "0.25" }} className="horizontal-line" />{" "}
          {/* Add a horizontal line */}
        </div>
        <ul className="custom-ul">
          <FontAwesomeIcon
            icon={faTrophy}
            style={{ color: "#f9a825", width: "30px", height: "28px" }}
          />
          <div className="contest-info">
            <li style={{ color: "#afafaf", fontSize: "14px" }}>in 2 days</li>
            <li style={{ color: "black", fontWeight: "600", fontSize: "14px" }}>
              Join our Contest{" "}
              <span style={{ color: "#40A9FF" }}>Weekly Contest 348</span>
            </li>
          </div>
        </ul>
        <div className="line-container">
          <hr style={{ opacity: "0.25" }} className="horizontal-line" />{" "}
          {/* Add a horizontal line */}
        </div>
        <ul className="custom-ul">
          <img
            src={avatar}
            alt="LeetCode"
            style={{ width: "35px", height: "35px", borderRadius: "1020px" }}
          />
          <div className="contest-info">
            <li style={{ color: "#afafaf", fontSize: "14px" }}>in 8 days</li>
            <li style={{ color: "black", fontWeight: "600", fontSize: "14px" }}>
              <span style={{ color: "#40A9FF" }}>LeetCode</span> posted 🎁{" "}
              <span style={{ color: "#40A9FF" }}>
                An exciting opportunity for HTML/CSS, DOM, React experts!
              </span>
              <br />
              <span
                style={{
                  whiteSpace: "pre-line",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                LeetCode is looking for HTML/CSS, DOM, React experts to join the
                content team! You'll have the <br />
                opportunity to - 🧑‍🤝‍🧑 Work with the top talent in the industry
                -...
              </span>
            </li>
          </div>
        </ul>

        <div className="line-container">
          <hr style={{ opacity: "0.25" }} className="horizontal-line" />{" "}
          {/* Add a horizontal line */}
        </div>

        <ul className="custom-ul">
          <img
            src={avatar}
            alt="LeetCode"
            style={{ width: "35px", height: "35px", borderRadius: "1020px" }}
          />
          <div className="contest-info">
            <li style={{ color: "#afafaf", fontSize: "14px" }}>a month ago</li>
            <li style={{ color: "black", fontWeight: "600", fontSize: "14px" }}>
              <span style={{ color: "#40A9FF" }}>LeetCode</span> posted{" "}
              <span style={{ color: "#40A9FF" }}>
                Day 29 - 30 Days of LC JavaScript Challenge
              </span>
              <br />
              <span
                style={{
                  whiteSpace: "pre-line",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                It's not too late to participate! You can join anytime during
                the event(May 5 ~ June 4). To make <br /> up a day, simply solve
                the missed problem before the event...
              </span>
            </li>
          </div>
        </ul>
        <div className="line-container">
          <hr style={{ opacity: "0.25" }} className="horizontal-line" />{" "}
          {/* Add a horizontal line */}
        </div>
        <ul className="custom-ul">
          <img
            src={avatar}
            alt="LeetCode"
            style={{ width: "35px", height: "35px", borderRadius: "1020px" }}
          />
          <div className="contest-info">
            <li style={{ color: "#afafaf", fontSize: "14px" }}>
              10 months ago
            </li>
            <li style={{ color: "black", fontWeight: "600", fontSize: "14px" }}>
              <span style={{ color: "#40A9FF" }}>LeetCode</span> posted{" "}
              <span style={{ color: "#40A9FF" }}>
                Join us to code continuously, such as completing the June Daily
                Coding Challenge!
              </span>
              <br />
              <span
                style={{
                  whiteSpace: "pre-line",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                --- Hi LeetCoders! 📲 Do you love LeetCode, and want to practice
                daily? Have you found <br /> yourself wishing to join a study
                group, or to have a group of users to...
              </span>
            </li>
          </div>
        </ul>
      </div>

      <hr style={{ opacity: "0.1" }} className="separator" />

      <div className="peter">
        <div className="mira2">
          <img src={siuu} alt="LeetCode Logo" className="leetcode-logo" />
        </div>
        <div className="contribute-promo">
          <div id="contribute-title">Want To Contribute</div>
          <div id="contribute-desc">Help the community, earn up to 1000 LeetCoins</div>
          <a href="/contribute/" id="contribute-action" target="_blank">Contribute</a>
        </div>
        <div className="last">
            <div className="middle">
              <ul className="suyash">
               <li>Leetcode Contest</li>
               <li>Participate and win your prizes</li>
               <a href="/contribute/" id="contribute-action" target="_blank">Join Contest</a>
               </ul>
            </div>
            <div className="sirname">
            <img src={Cup} alt="Leet" style={{ height: "100px", width: "100px" }}></img>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
