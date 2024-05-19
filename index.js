const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/todo", require("./routes/todo.route"));

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ghz1w2s.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(PORT, (req, res) => {
      console.log("Server started on port:", PORT);
    });
  } catch (err) {
    console.error(err);
  }
};
start();
