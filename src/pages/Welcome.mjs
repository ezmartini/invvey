function Welcome() {
  return (
    <div className="container text-center mt-5">
      {" "}
      <h1> Welcome to Invvey </h1>
      <div className="container w-40 mt-5 row ">
        {" "}
        <div className="col-6">
          <a href="/login"> Login </a>
        </div>
        <div className="col-6">
          <a href="/register"> Register </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
