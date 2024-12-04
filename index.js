const express = require("express");
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');

// const sslOptions = {
//       key: fs.readFileSync(path.join(__dirname, 'server.key')),
//       cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
//   };

const fileName = ["CaviarDreams.ttf", "playwriteRegular.ttf", 'poppinsExtraBold.ttf'];

app.get("/caviar", function (req, res) {
  const options = {
    root: path.join(`${__dirname}`),
  };


  res.setHeader('Content-Disposition', `attachment; filename="${fileName[0]}"`);
  
  res.sendFile(fileName[0], options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName[0]);
    }
  });
});

app.get("/playwrite", function (req, res) {
  const options = {
    root: path.join(`${__dirname}`),
  };


  res.setHeader('Content-Disposition', `attachment; filename="${fileName[1]}"`);
  
  res.sendFile(fileName[1], options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName[1]);
    }
  });
});

app.get("/poppins", function (req, res) {
  const options = {
    root: path.join(`${__dirname}`),
  };


  res.setHeader('Content-Disposition', `attachment; filename="${fileName[2]}"`);
  
  res.sendFile(fileName[2], options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName[2]);
    }
  });
});

http.createServer(app).listen(3001, () => {
      console.log('HTTP Server running on https://localhost:3001');
  });
