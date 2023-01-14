function Welcome() {
  return (
    <div className="page pattern p-1">
      <div className="container text-center mt-5 p-5 landing">
        {" "}
        <h1> Welcome to Invvey! </h1>
        <div className="container mt-3 row mb-2">
          {" "}
          <div className="col-6">
            <a className="btn btn-outline-primary" href="/login">
              {" "}
              Login{" "}
            </a>
          </div>
          <div className="col-6">
            <a className="btn btn-primary" href="/register">
              {" "}
              Register{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
