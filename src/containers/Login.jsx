import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { login } from "./authService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import bgImg from "../images/pic1.jpg"

export default function Login() {
  let history = useHistory();
  const [userData, setUserData] = useState({username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState({value: ''});

//   function validateForm() {
//     return userData.email.length > 0 && userData.password.length > 0;
//   }

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(userData.email, userData.password);
    console.log("loginuser", data);
    //if username or password field is empty, return error message
    if (userData.email === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));

    } else if (data && data.admin && data.admin.uuid) {
      //Signin Success
      localStorage.setItem("token", data.admin.uuid);
      window.location.pathname = "/";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
      return;
    }
  };

  return (
    <div className="Login">
      <Form className="loginbox" onSubmit={handleSubmit}>
          <h1>Login Here</h1>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="email">Email</Form.Label>
          <Form.Control className="inpute"
            autoFocus
            type="email"
            name="email"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="pass1">Password</Form.Label>
          <Form.Control className="passp"
            type="password"
            name="password"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Button className="submit" block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
    
  );
}