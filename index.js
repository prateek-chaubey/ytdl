const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');

const fetch = require('node-fetch');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  if ("url" in req.query) {
    ytdl.getInfo(req.query.url).then(h => {

      var k = ytdl.filterFormats(h.formats, 'audioandvideo');

      k = JSON.stringify(k).substr(0, JSON.stringify(k).length - 1);
      k = k + ',{"title":"' + h.videoDetails.title + '"}]';
      res.send(JSON.parse(k));
    });

  }
  else {
    res.send("Bete tune to  Moj Kardi");
  }
});



app.get("/aud", (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  if ("url" in req.query) {
    ytdl.getInfo(req.query.url).then(h => {

      var k = ytdl.filterFormats(h.formats, 'audioonly');

      // k=JSON.stringify(k).substr(0,JSON.stringify(k).length-1);
      var n = k[k.length - 1].url;
      var thu = h.videoDetails.thumbnails[h.videoDetails.thumbnails.length - 1].url;
      k = '{"url":"' + n + '","title":"' + h.videoDetails.title + '","thumb":"' + thu + '"}';
      res.send(JSON.parse(k));
    });

  }
  else {
    res.send("Bete tune to  Moj Kardi");
  }
});

async function op() {

  const response = await fetch('https://ytdl.reelsremix.repl.co/aud/?url=https://youtu.be/DuZvDgpgFHs');
  const data = await response;
  console.log(data)

}
//setInterval(op, 500);
app.listen(5000, () => {
  console.log("App Running on Port 5000!");
});