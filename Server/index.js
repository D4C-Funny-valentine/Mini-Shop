require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const corsOptions = require("./src/config/corsOptions");
const connectDB = require("./src/config/dbConnect");

const PORT = process.env.PORT || 3500;

connectDB();

// cors middleware
app.use(cors(corsOptions));

// url middleware
app.use(express.urlencoded({ extended: false }));

// json middleware
app.use(express.json());

app.use("/api", require("./src/routes/products"));

// create server
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
