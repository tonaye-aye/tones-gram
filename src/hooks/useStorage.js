import { useState, useEffect } from "react";

// firebase storage from config file
import {
  projectStorage,
  projectFirestore,
  timestamp
} from "../Firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create REF reference to file inside firestore database
    // -- using uploaded images name
    const storageRef = projectStorage.ref(file.name);
    // create url reference in firestore database
    const collectionRef = projectFirestore.collection("images");
    // take the file and PUT it in the reference
    // -- '.put' is asynchronous so we tack on '.on' and wait for 'state_changed' to fire function
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // snap object is a snapshot in time of the upload object
        // -- which fires more than once while the file uploads
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // create a percentage of how many bytes have been transferred
        // set the progress as the percentage
        setProgress(percentage);
      },
      (err) => {
        // set error if there is an error
        setError(err);
      },
      // fire this function when the upload is complete
      async () => {
        // finds the image url of the file we just uploaded and saves it in the 'url' variable
        const url = await storageRef.getDownloadURL();
        // use timestamp method to add 'created at' time to object
        const createdAt = timestamp();

        // add the upload to the firestore collection
        collectionRef.add({ url, createdAt });

        // set the url to the just uploaded image url
        setUrl(url);
      }
    );
  }, [file]);

  // return the progress, url and error
  return { progress, url, error };
};

export default useStorage;
