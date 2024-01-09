import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="content">
        <h4 className="title">Welcome</h4>
        <h6 className="title2">Love getting more leads?</h6>
        <Link to="/github-search">
          <button type="button" className="goto-btn">
            Go To Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
