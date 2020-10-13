import React, { useState } from "react";

// components
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import Footer from "./components/Footer";

function App() {
  // state stuff
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      <main>
        {/* form */}
        <UploadForm />

        {/* image grid */}
        <ImageGrid setSelectedImg={setSelectedImg} />

        {/* modal window */}
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
