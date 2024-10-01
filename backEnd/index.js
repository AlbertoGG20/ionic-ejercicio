const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and re-sync db.');
});

app.get("/", (req, res) => {
  res.json({ message: 'Hello from the back end!' });
});

require("./routes/car.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});