const express = require("express");
const app = express();
const friends=require("./api/friends");
const PORT = process.env.PORT || 5000;
// 

app.use("/api/addfriends",friends);

// krishna deployed

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

