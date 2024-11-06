const express = require("express");
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');

const sslOptions = {
      key: fs.readFileSync(path.join(__dirname, 'server.key')),
      cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
  };

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

// app.listen(3001, function () {
//   console.log("Example app listening on port 3001!");
// });

https.createServer(sslOptions, app).listen(443, () => {
      console.log('HTTPS Server running on https://localhost');
  });




// // Basic route to test
// app.get('/', (req, res) => {
//     res.send('Hello from HTTPS server!');
// });

// // Start HTTPS server
// https.createServer(sslOptions, app).listen(443, () => {
//     console.log('HTTPS Server running on https://localhost');
// });
