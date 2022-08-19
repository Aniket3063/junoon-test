import React, { useEffect, useContext } from "react";
import logo from "../pages/imgs/junoonlogo.png";
import { FaDownload } from "react-icons/fa";
import { WallPaperContext } from "../../context/WallPaperContext";

function Wallpaper_images_for_desktop({ link }) {
  const { url, indexP, indexD, urlD, isDesk } = useContext(WallPaperContext);
  useEffect(() => {
    // let isDesk = isDesk;
  }, [isDesk]);

  return (
    <div className="image active">
      <img
        style={{ width: "100%", height: "100%" }}
        src={isDesk ? urlD[indexD] : url[indexP]}
        className="image_d"
      />
      <div className="image_overlay">
        <img src={logo} className="logo_junoon_forwallpaper" />
        <div className="wallpaper-content">
          <a href={isDesk ? urlD[indexD] : url[indexP]} target="_blank">
            <button className="btn btn_wallpaper">
              <FaDownload />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper_images_for_desktop;
