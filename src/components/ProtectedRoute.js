import React from "react";
import { Redirect, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (<><Topbar /><div className="container"><Sidebar /><Component {...props} /></div></>) : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;