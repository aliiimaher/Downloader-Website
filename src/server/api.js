// const ytdl = require("ytdl-core");
// const fs = require("fs");

// const videoURL = "https://youtu.be/myTZi5wOhjg?si=ubgwG4UjiXnjqGbq";

// // Get video info
// ytdl.getInfo(videoURL, (err, info) => {
//   if (err) throw err;

//   // Choose the format with the highest quality
//   const format = ytdl.chooseFormat(info.formats, { quality: "highest" });

//   // Start the download
//   const video = ytdl(videoURL, { format });

//   // Save the video
//   video.pipe(fs.createWriteStream(`${info.title}.mp4`));

//   video.on("end", () => {
//     console.log("Download complete!");
//   });
// });

// const express = require('express');
// const cors = require('cors');
// const { YouTube } = require('pytube');

// const app = express();
// app.use(cors());

// app.get('/download', async (req, res) => {
//   const videoUrl = req.query.url;
//   const yt = await YouTube.fromURL(videoUrl);
//   const videoStream = yt.streams.getHLSManifestURL();
//   const response = await fetch(videoStream);
//   const videoBlob = await response.blob();
//   const blobUrl = URL.createObjectURL(videoBlob);
//   res.json({ url: blobUrl });
// });

// app.listen(3001, () => {
//   console.log('Server is running on http://localhost:3001');
// });

const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const fs = require("fs");

const app = express();

app.use(cors());

app.post("/download", (req, res) => {
  const videoUrl = req.body.url;

  // Validate the YouTube URL
  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  // Get video info
  ytdl.getInfo(videoUrl, (err, info) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error fetching video information" });
    }

    const videoTitle = info.videoDetails.title;
    const stream = ytdl(videoUrl, { quality: "highestvideo" });

    // Set headers for video download
    res.setHeader(
      "Content-disposition",
      `attachment; filename="${videoTitle}.mp4"`
    );
    res.setHeader("Content-type", "video/mp4");

    stream.pipe(res);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
