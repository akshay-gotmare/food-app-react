const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const { targetUrl } = req.query;

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        Origin: "https://swiggy.com",
        Referer: "https://swiggy.com/",
      },
    });

    // If the data is still empty, log the whole response on the SERVER terminal
    console.log("Data from Swiggy:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Axios Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Proxy server is running on http://localhost:5000");
});
