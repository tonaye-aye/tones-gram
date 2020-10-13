import React from "react";

// nav stuff
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav>
      <p
        className="brand"
        onClick={() => {
          let path = ``;
          history.push(path);
        }}
      >
        tonesgram
      </p>

      <div className="fold">
        <p>Share memories</p>
        <button
          type="button"
          onClick={() => {
            let path = `about`;
            history.push(path);
          }}
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
