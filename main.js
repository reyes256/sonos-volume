const express = require("express");
const { DeviceDiscovery } = require("sonos");

let volume = 35;
DeviceDiscovery((device) => {
  console.log("found device at " + device.host);

  setInterval(() => {
    device.setVolume(volume)
  }, 10)
});

const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { volume });
});

app.post("/updateVolume", (req, res) => {
  volume = Number(req.body.newVolume);
  res.render("index", { volume });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
