import express from "express";

const app = express();

app.listen(5001, () => {
  console.log(`Server is running on port:${5001}`);
});

app.get("/", (req, res) => {
  res.send("My app is running :-)");
});
