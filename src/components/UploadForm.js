import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

// dropzone
import { useDropzone } from "react-dropzone";

// componenents
import ProgressBar from "./ProgressBar";

// icons
import { MdPermMedia } from "react-icons/md";
import { ImFire } from "react-icons/im";

const UploadForm = () => {
  // using a state hook
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // specifing types of images that are allowed to be uploaded
  const types = ["image/png", "image/jpeg"];

  // dropzone stuff
  const onDrop = (files) => {
    let selected = files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a .png or .jpg only");
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // responsive
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });

  // template in JSX
  return (
    <form>
      <h1>Upload...</h1>
      <div className="drop" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <ImFire size="2.5em" />
            <p>Drop it like it's hot</p>
          </div>
        ) : (
          <div>
            <MdPermMedia size="2.5em" />
            <p>
              {isTabletOrMobileDevice
                ? `Touch to upload`
                : `Drag 'n' drop an image (or click here)`}
            </p>
          </div>
        )}
      </div>
      <div className="output">
        {error && <p className="error">{error}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
