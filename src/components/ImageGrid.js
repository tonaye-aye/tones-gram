import React from "react";

// firabase
import useFirestore from "../hooks/useFirestore";

// famer motion
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, setBodyOverflow }) => {
  // get all of the 'documents' from the firestore collection
  // -- collection selected is 'images'
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
              setBodyOverflow("hidden");
            }}
          >
            <motion.img
              src={doc.url}
              alt="summer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
