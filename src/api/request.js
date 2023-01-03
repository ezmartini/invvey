const REQ_DOMAIN =
  process.env.NODE_ENV === "production"
    ? "rendered backend link here"
    : "http://localhost:5000";

export const requestURL = (path) => `${REQ_DOMAIN}${path}`;
