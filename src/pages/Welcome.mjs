import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container mt-4">
      {" "}
      <h1 className="text-center"> Welcome to Invvey </h1>
      <div className="container text-center row w-40 mt-5">
        {" "}
        <div className="col">
          <Link to="/register"> Register </Link>
        </div>
        <div className="col">
          <Link to="/Login"> Login </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
