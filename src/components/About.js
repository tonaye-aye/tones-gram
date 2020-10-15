import React from "react";

// nav stuff
import { useHistory } from "react-router-dom";

// icons
import { DiSass, DiReact } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

const About = () => {
  const history = useHistory();

  return (
    <div className="about">
      <h1>About us</h1>
      <h3>
        Upload images simply and watch the display reel update once an image is
        added.
      </h3>
      <h3>Built using:</h3>
      <ul>
        <li>
          <DiReact />
          <span>React</span>
        </li>
        <li>
          <SiFirebase />
          <span>Firebase</span>
        </li>
        <li>
          <DiSass />
          <span>Sass</span>
        </li>
      </ul>
      <div className="links">
        <button
          type="button"
          onClick={() => {
            let path = ``;
            history.push(path);
          }}
        >
          Home
        </button>
        <a href="https://github.com/tonaye-aye/tones-gram">View code</a>
      </div>
    </div>
  );
};

export default About;
