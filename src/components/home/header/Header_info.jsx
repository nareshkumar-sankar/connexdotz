import React from "react";
import "../../../assets/styles/home/header/Header_info.css";

const Header_info = () => {
  return (
    <>
    <div id="header-info" className="container-fluid">
      <div id="left">
        <div><i class="fa-solid fa-circle-info"></i> For further information please contact</div>
      </div>
      <div id="right">
        <span><i class="fa-solid fa-phone"></i>+91 7339060227</span>
        <span><i class="fa-regular fa-envelope"></i>sales@connexdotz.in</span>
      </div>
    </div>
    </>
  );
};

export default Header_info;
