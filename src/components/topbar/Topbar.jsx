import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, ExitToApp } from "@material-ui/icons";

export default function Topbar() {

  function logout() {
    localStorage.clear();
    window.location.pathname = "/signin";
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AL-QAIM ENTERPRISES</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer" onClick={logout}>
          <ExitToApp />

          </div>
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
