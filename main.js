const express = require("express");

const app = express();
const port = 3000;

let volume = 35;
function setVolume() {
  console.log(volume);
}

setInterval(setVolume, 100);

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { volume, name: "cullom" });
});

app.post("/updateVolume", (req, res) => {
  volume = Number(req.body.newVolume);
  res.render("index", { volume });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
