const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.get('*', async (req, res) => res.json("hello mate"));
const PORT = 5000;

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://misha:q286XEMHXgHKuYpa@cluster0.r7qll.mongodb.net/rockpaperscissors?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
