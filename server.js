const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const app = express();
const degreeRoute = require("./app/routes/degree.route")
const experienceRoute = require("./app/routes/experience.route")
const jobRoute = require("./app/routes/job.route")
const disponibiliteRoute = require("./app/routes/disponibilite.route")
const linkRoute = require("./app/routes/link.route")
const candidatureRoute = require("./app/routes/candidature.route")
const offreRoute = require("./app/routes/offre.route")
const levelRoute = require("./app/routes/level.route")
const questionRoute = require("./app/routes/question.route")
const choixRoute = require("./app/routes/choix.route")
const keycloudRoute = require("./app/routes/keycloud.route")
const libraryRoute = require("./app/routes/library.route")
const categoryRoute = require("./app/routes/category.route")
const userRoute = require("./app/routes/user.route")
const candidature_offreRoute = require("./app/routes/candidature_offre.route")










var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});



const db = require("./app/models")

app.use(degreeRoute)
app.use(experienceRoute)
app.use(jobRoute)
app.use(disponibiliteRoute)
app.use(linkRoute)
app.use(candidatureRoute)
app.use(offreRoute)
app.use(levelRoute)
app.use(questionRoute)
app.use(choixRoute)
app.use(keycloudRoute)
app.use(libraryRoute)
app.use(categoryRoute)
app.use(userRoute)
app.use(candidature_offreRoute)






// app.use(database);



db.sequelize.sync();





// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


