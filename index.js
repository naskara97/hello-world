const express = require("express");
const app = express();
const path = require('path');

app.get("/", function (req, res) {
  const options = {
    root: path.join(`${__dirname}`),
  };

  const fileName = "CaviarDreams.ttf";

  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
