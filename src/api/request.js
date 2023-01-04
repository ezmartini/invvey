const REQ_DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://invvey-backend.onrender.com"
    : "http://localhost:5000";

export const requestURL = (path) => `${REQ_DOMAIN}${path}`;
