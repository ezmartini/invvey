import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/user.js";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    try {
      const response = await login(userData);
      if (response.token) {
        setErrMessage("");
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response.status === 401) {
        setErrMessage(
          "Looks like the credentials you entered weren't correct. Please double check your username and password. "
        );
      }
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
        <label htmlFor="loginUsername">Username</label>
        <input
          type="username"
          className="form-control mb-2"
          id="loginUsernameInput"
          aria-describedby="inputUsername"
          placeholder="Enter your username"
          minLength="4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="loginPassword" className="mb-0">
          {" "}
          Enter a password{" "}
        </label>
        <input
          type="password"
          className="form-control mb-2"
          id="passwordInput"
          aria-describedby="inputPassword"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
function Login() {
  return (
    <div className="container mt-4">
      <h1 className="text-center"> Welcome back to Invvey! </h1>
      <h4 className="text-center">
        {" "}
        Don't have an account? Click <Link to="/register">here</Link> to
        register!
      </h4>
      {RegisterForm()}
    </div>
  );
}

export default Login;
