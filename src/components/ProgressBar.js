import React, { useEffect } from "react";

// import useStorage hook
import useStorage from "../hooks/useStorage";

// framer motion
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress">
      <p>
        Uploading {file.name} <strong>{Math.ceil(progress)}%</strong>
      </p>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
