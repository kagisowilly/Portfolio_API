const express = require("express");
const app = express.Router();

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}
// PROJECTS ARRAY
let projects= [
    {
      id: 1,
  title: "Sonic vs Road Runner",
  github: "https://github.com/Kagisomphayi/Sonic-Roadrun",
  netlify:"https://kagisomphayiroadrunner.netlify.app",
  description: "A race between Road Runner and Sonic.(CSS & HTML)",
  img: "https://i.postimg.cc/RZcd1JZZ/sonicproject-min.png",
  // html:"HTML"
},
{
  id: 2,
  title: "Ecommerce Website",
  github: "https://github.com/Kagisomphayi/ASICSSTORE",
  netlify:"https://kagisomphayiasics.netlify.app/",
  description: "Ecommerce website built with JS, HTML, and CSS.",
  img: "https://i.postimg.cc/ydwnXmcW/Ecom.png",
},
{
  id: 3,
  title: "Cloning a Website",
  github: "https://github.com/Kagisomphayi/bootstrap",
  netlify:"https://kagisomphayiclone.netlify.app",
  description: "Cloning DOOB Website using Bootstrap,CSS & HTML.",
  img: "https://i.postimg.cc/Bn9zT044/bootstrapclone.png",
},
{
  id: 4,
  title: "Javascript Calculator",
  github: "https://github.com/Kagisomphayi/Calculator",
  netlify:"https://kagisomphayicalculator.netlify.app/",
  description: "Building a functioning calculator(HTML,CSS & JS",
  img: "https://i.postimg.cc/1Xx9wdzT/calculator.png",
},
{
  id: 5,
  title: "virtual Keyboard",
  github: "https://github.com/kagisowilly/Keyboard",
  netlify:"https://grand-creponne-c003a7.netlify.app/",
  description: "Using JavaScript HTML DOM EventListener (onclick) to build a functional virtual Keyboard",
  img: "https://i.postimg.cc/T3rF7hpN/keyboard.png",
},
{
  id: 6,
  title: "Reaction Timer",
  github: "https://github.com/Kagisomphayi/Reaction-timer",
  netlify:"https://kagisomphayireactiontimer.netlify.app/",
  description: "Building a reaction time game with VUE",
  img: "https://i.postimg.cc/rpwwXdrR/Screenshot-from-2022-02-11-12-05-37.png",
},
{
  id: 7,
  title: "Temperature Converter",
  github: "https://github.com/Kagisomphayi/Temperature-Converter",
  netlify:"https://kagisotemperaturecon.netlify.app/",
  description: "Converts celsius to fahrenheit(HTML,Javascript and CSS)",
  img: "https://i.postimg.cc/ZnGGbq5S/Tempe-convert.png",
},
{
  id: 8,
  title: "Vue POS(point of sale)",
  github: "https://github.com/kagisowilly/Bakery-Burst-POS-front",
  netlify:"https://bakery-burst.netlify.app/",
  description: "We worked in a pair to build a POS using Bootstrap,Vuejs ,Node Js(express) and MongoDb",
  img: "https://i.postimg.cc/bYTXLPbq/Capture.png",
},
{
  id: 9,
  title: "To-do List",
  github: "https://github.com/kagisowilly/to-do",
  netlify:"https://to-do-list-9ac3a.web.app/#/",
  description: "Building a to-do list that uses localstorage.(Vue.Js)",
  img: "https://i.postimg.cc/8zL63gdz/Capture.png",
},
{
  id: 10,
  title: "Booking System",
  github: "https://github.com/kagisowilly/Laundry-Villa",
  netlify:"https://laundry-villa.netlify.app/#/",
  description: "Built a booking system using Node Js(express), MongoDb, Vue JS and Bootstrap",
  img: "https://i.postimg.cc/qMP9v7HX/laundry-villa.png",
}
]

// ROUTE FOR PROJECTS
app.get('/', function (req, res) {
    res.send(projects);
  });

// GET ONE PROJECT
app.get("/:id", (req, res) => {
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );
  if (!project)
    return res
      .status(404)
      .send({ msg: "The project with that given id was not found" });
  res.send(project);
});

// CREATE A PROJECT
app.post("/", (req, res) => {
  const { title, details, img, github, netlify } = req.body;

  if (!title || !details || !img || !github || !netlify)
    return res.status(400).send({ msg: "Not all data sent" });

  const project = {
    id: projects.length + 1,
    title,
    details,
    img,
    github,
    netlify,
  };
  projects.push(project);
  res.send(project);
});

// UPDATE PROJECTS
app.put("/:id", (req, res) => {
  const { title, details, img, github, netlify } = req.body;
  const project = projects.find(
    (project) => project.id === parseInt(req.params.id)
  );
  if (!project)
    res
      .status(404)
      .send({ msg: "The project with the given id was not found" });

  if (title) projects.title = title;
  if (details) projects.details = details;
  if (img) projects.img = img;
  if (github) projects.github = github;
  if (netlify) projects.netlify = netlify;

  res.send(project);
});

  
// DELETE PROJECTS
app.delete("/:id", (req, res) => {
  project = projects.filter((project) => project.id != parseInt(req.params.id));
  fixArrayID(project);
  res.send({ msg: "Project has been deleted" });
});

module.exports = app;
