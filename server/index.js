const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect MongoDB using production URI or development URI
mongoose
  .connect(process.env.MONGODB_URI || process.env.MONGODB_URI_DEV, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.log("MongoDB Connection Error:");
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Routes
app.use("/auth", require("./routes/auth-api"));
app.use("/player", require("./routes/player-api"));

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
