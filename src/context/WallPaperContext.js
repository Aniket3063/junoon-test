import React, { createContext, useState, useEffect } from "react";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase-new/storage";
import { storage } from "../firebase/wallpaper_firebase";

const WallPaperContext = createContext();

function WallPaperProvider({ children }) {
  //const navigate = useNavigate();
  const phoneImagesListRef = ref(storage, "images/Phone/");
  const deskImagesListRef = ref(storage, "images/Desktop/");

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [indexP, setIndexP] = useState(0);
  const [indexD, setIndexD] = useState(0);
  const [isDesk, setIsDesk] = useState(true);
  const [lengthD, setLengthD] = useState(0);
  const [lengthP, setLengthP] = useState(0);

  const [urlD, setUrlD] = useState([]);

  useEffect(() => {
    const getImagesPhone = async () => {
      listAll(phoneImagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            //let arr = [...url, url];
            setUrl((prev) => [...prev, url]);
          });
        });
      });
    };

    const getImagesDesktop = async () => {
      listAll(deskImagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            //let arr = [...url, url];
            setUrlD((prev) => [...prev, url]);
          });
        });
      });
    };

    getImagesPhone();

    setLengthP(55);

    getImagesDesktop();

    setLengthD(50);

    //setLoading(false);

    //   console.log(list);
  }, []);

  const contextValue = {
    loading,
    url,
    urlD,
    setLoading,
    setUrl,
    setUrlD,
    indexP,
    indexD,
    setIndexP,
    setIndexD,
    isDesk,
    setIsDesk,
    lengthP,
    lengthD,
  };

  return (
    <WallPaperContext.Provider value={contextValue}>
      {children}
    </WallPaperContext.Provider>
  );
}

export { WallPaperProvider, WallPaperContext };
