const allowOrigins = require("./allowOrigins");

const corsOptions = {
  // origin: (origin, callback) => {
  //   if (allowOrigins.includes(origin) || !origin) {
  //     console.log(origin);
  //     callback(null, true);
  //   } else {
  //     console.log(origin);
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
  // optionsSuccessStatus: 200,
  // credentials: true,
  origin: (origin, callback) => {
    console.log("Received origin:", origin);
    if (allowOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
