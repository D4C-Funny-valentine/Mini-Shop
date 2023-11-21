const allowOrigins = require("./allowOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowOrigins.includes(origin) || !origin) {
      console.log(origin);
      callback(null, true);
    } else {
      console.log(origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = corsOptions;
