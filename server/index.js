const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect MongoDB using production URI or development URI
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URI_DEV, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.log("MongoDB Connection Error:");
  console.log(err);
});

// Routes
app.use('/auth', require("./routes/auth-api"));





app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});