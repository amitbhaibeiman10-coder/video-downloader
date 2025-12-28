export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Video URL missing"
    });
  }

  // DEMO RESPONSE (real download server se hota hai)
  return res.status(200).json({
    success: true,
    message: "Backend connected successfully",
    video_url: url,
    formats: [
      { quality: "360p", type: "mp4" },
      { quality: "720p", type: "mp4" },
      { quality: "Audio", type: "mp3" }
    ]
  });
}
