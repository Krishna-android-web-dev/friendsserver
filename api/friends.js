const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  //   hello world
  try {
    res.send("Hello World");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
