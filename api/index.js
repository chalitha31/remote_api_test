const express = require("express");
const app = express();



const port = process.env.PORT || 3000;
const validKeys = ["free_key_123", "test_key_456"];


app.get("/api", (req, res) => {
  const userKey = req.query.key;

  if (!validKeys.includes(userKey)) {
    return res.status(401).json({ error: "Invalid key! අවසර නැත!" });
  }

  res.json({
    data: "ඔබගේ දත්ත මෙතැන! 🎉",
    success: true,
    timestamp: new Date(),
  });
});

app.listen(port, () => console.log(`✅ Server is running on PORT: ${port}`));
