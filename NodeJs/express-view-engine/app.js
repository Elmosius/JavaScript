const express = require("express");
const app = express();
const port = 3000;

// menggunakan template ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const orangRandom = [
    {
      nama: "Rizky Khapidsyah",
      umur: 20,
    },
    {
      nama: "Josh Doe",
      umur: 19,
    },
    {
      nama: "Kaka",
      umur: 22,
    },
  ];

  res.render("index", {
    nama: "NodeJs",
    orang: orangRandom,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/product/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category Id: ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Error 404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
