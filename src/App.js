import React, { useState } from "react";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  // state stuff
  const [selectedImg, setSelectedImg] = useState(null);
  const [bodyOverflow, setBodyOverflow] = useState("visible");

  document.body.style.overflow = bodyOverflow;

  return (
    <div className="App">
      <Router>
        {/* navbar */}
        <Navbar />

        {/* main area */}
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              {/* form */}
              <UploadForm />

              {/* image grid */}
              <ImageGrid
                setBodyOverflow={setBodyOverflow}
                setSelectedImg={setSelectedImg}
              />

              {/* modal window */}
              {selectedImg && (
                <Modal
                  setBodyOverflow={setBodyOverflow}
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}
            </Route>
          </Switch>
        </main>

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
