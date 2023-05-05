import React, { useState } from "react";
import "./Login.css";
import "../FontAwesomeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colours1, setColours1] = useState("black");
  const [colours2, setColours2] = useState("black");
  const [colours3, setColours3] = useState("black");
  const [colours4, setColours4] = useState("black");
  const [visible, setVisible] = useState("none");
  const [type, setType] = useState("password");

  function getEmail(event) {
    setEmail(event.target.value);
    if (!event.target.value.includes("@")) {
      console.log("Email is not valid");
    }
  }

  function getPassword(event) {
    setPassword(event.target.value);

    event.target.value.length >= 8 ? setColours1("green") : setColours1("red");
    !event.target.value.match(/\s/) ? setColours4("green") : setColours4("red");
    event.target.value.match(/[0-9]/)
      ? setColours2("green")
      : setColours2("red");

    event.target.value.match(/[!@#$%^&*]/)
      ? setColours3("green")
      : setColours3("red");

    event.target.value.length >= 8 &&
    event.target.value.match(/[0-9]/) &&
    event.target.value.match(/[!@#$%^&*]/) &&
    !event.target.value.match(/\s/)
      ? setVisible("none")
      : setVisible("block");

    event.target.value.length === 0 ? setVisible("none") : setVisible("block");
  }

  function submitForm(event) {
    event.preventDefault();
    console.log("Email: " + email + " Password: " + password);
  }

  return (
    <div className="login-section">
      <div className="login-card">
        <div className="card left">
          <div className="left-side">
            <h2> Welcome</h2>
          </div>
        </div>
        <div className="card right">
          <h1> Login</h1>
          <div className="email-container">
            <FontAwesomeIcon icon="envelope" className="icon" />
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Email"
              onChange={getEmail}
            ></input>
          </div>
          <div className="password-container">
            <FontAwesomeIcon icon="lock" />

            <input
              type={type}
              name="text"
              className="input"
              placeholder="Password"
              onChange={getPassword}
            ></input>
            <div className="validate-pass" style={{ display: visible }}>
              <p style={{ color: colours1 }}> ✓ At least 8 characters</p>
              <p style={{ color: colours2 }}> ✓ At least 1 number</p>
              <p style={{ color: colours3 }}> ✓ At least 1 special character</p>
              <p style={{ color: colours4 }}> ✓ No spaces</p>
            </div>
          </div>
          <div className="login-button">
            <FontAwesomeIcon icon="sign-in-alt" />
            <button onClick={submitForm}>LOGIN</button>
          </div>

          <div className="anchor-tag">
            <a className="forget-pass" href="/">
              Forgot Password?
            </a>
            <a className="forget-pass" href="/">
              Don't have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
