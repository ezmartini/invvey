import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container text-center">
      {" "}
      <h1> Welcome to Invvey </h1>
      <div className="row">
        <Link to="/register"> Register </Link>
        <Link to="/Login"> Login </Link>{" "}
      </div>
    </div>
  );
}

export default Welcome;
