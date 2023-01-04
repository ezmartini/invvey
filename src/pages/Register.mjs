import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/user.js";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrMessage(
        "Oops! Looks like you may have missed typed your password. Try again."
      );
    } else {
      setErrMessage("");
      const userData = { username, businessName, password };
      const response = await register(userData);
      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errMessage && (
        <p className="alert alert-danger mt-3" role="alert">
          {" "}
          {errMessage}{" "}
        </p>
      )}
      <div className="form-group">
        <label htmlFor="registerUsername">Username</label>
        <input
          type="username"
          className="form-control mb-2"
          id="registerUsernameInput"
          aria-describedby="inputUsername"
          placeholder="Create a username"
          minLength="4"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="registerBusiness">Business Name</label>
        <input
          type="text"
          className="form-control mb-2"
          id="businessNameInput"
          aria-describedby="InputBusinessName"
          placeholder="Name of your business"
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />

        <label htmlFor="registerPassword" className="mb-0">
          {" "}
          Enter a password{" "}
        </label>
        <small id="passwordHelp" className="form-text text-muted mt-0">
          Your password must be at least 6 characters long.
        </small>
        <input
          type="password"
          className="form-control mb-2"
          id="passwordInput"
          aria-describedby="inputPassword"
          placeholder="A secure password you'll remember"
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
        />

        <label htmlFor="confirmPassword"> Confirm Password </label>
        <input
          type="password"
          className="form-control mb-2"
          id="confirmPasswordInput"
          aria-describedby="inputPasswordConfirm"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
function Register() {
  return (
    <div className="container mt-4">
      <h1 className="text-center"> Register for Invvey</h1>
      <h4 className="text-center">
        {" "}
        Already have an account? Click <Link to="/login">here</Link> to login!
      </h4>
      {RegisterForm()}
    </div>
  );
}

export default Register;
