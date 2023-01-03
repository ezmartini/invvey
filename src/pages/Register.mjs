import { Link } from "react-router-dom";

function registerForm() {
  return (
    <form>
      <div className="form-group">
        <label for="registerUsername">Username</label>
        <input
          type="username"
          className="form-control mb-2"
          id="registerUsernameInput"
          aria-describedby="inputUsername"
          placeholder="Create a username"
          minLength="4"
        />
        <label for="registerBusiness">Business Name</label>
        <input
          type="text"
          className="form-control mb-2"
          id="businessNameInput"
          aria-describedby="InputBusinessName"
          placeholder="Name of your business"
          required
        />

        <label for="registerPassword" className="mb-0">
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
          minLength="6"
        />

        <label for="confirmPassword"> Confirm Password </label>
        <input
          type="password"
          className="form-control mb-2"
          id="confirmPasswordInput"
          aria-describedby="inputPasswordConfirm"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">
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
      {registerForm()}
    </div>
  );
}

export default Register;
