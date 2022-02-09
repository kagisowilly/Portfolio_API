var express = require('express');
var app = express();
const cors = require("cors");
app.use(cors());

// RESUME ARRAY
let resumes=  [
    {
      title: "Web Development",
      period: "September(2016) - Present",
      description: `Life Choices is a year-long Bootcamp where we learn more about Web development and it's Fundamentals. We also get the oppotunity to learn interpersonal skills.`,
      institution: "Life Choices acardemy",
     
    },
    {
      title: "Customer Service",
      description: `We got the opportunity to learn the importanceof strong
                  and consistent communication, dealing with a difficult
                  costomers, how to handle complaints and the value of
                  loyalty in the work industry.`,
      institution: "E-learning colleg",
      icon: "bi bi-mortarboard-fill",
      period: "August(2021)",
    },
    {
      title: "Private Tutoring & Self Learning",
      description: `I was tutoring grade 12 learners Maths and Physics. On my
                  free time i was teaching myself HTML and CSS with the clearhelp
                  of online content.`,
      institution: "",

      period: "January 2020 - November 2020",
    },
    {
      title: "Assisting First-Year Students",
      description: `We were assisting first-year Students at the University Of
                  Pretoria with Registering online and using Printing
                  Machines.`,
      institution: "",

      period: "January-february(2018) & January-february(2019)",
    },

    {
      title: "Private Tutoring",
      description: `During this Period i was tutoring some of the grade 12
                  learners from my area Maths and Physics. The experience
                  helped me a lot with improving my communication skills.`,
      institution: "",
      icon: "bi bi-briefcase-fill",
      period: "January 2015 - December 2015",
    },
    {
      title: "National Senior Certificate",
      description: `During my time at this institution i learned to be a leader and i worked more on my time management.`,
      institution: "Mmametlhake High School", 
      period: "January 2012 - December 2014",
    }
  ];
// PROJECTS ARRAY
  let projects= [
    {
  title: "Sonic vs Road Runner",
  github: "https://github.com/Kagisomphayi/Sonic-Roadrun",
  netlify:"https://kagisomphayiroadrunner.netlify.app",
  description: "A race between road runner and sonic.(CSS & HTML)",
  img: "https://i.postimg.cc/RZcd1JZZ/sonicproject-min.png",
  // html:"HTML"
},
{
  title: "Ecommerce Website",
  github: "https://github.com/Kagisomphayi/ASICSSTORE",
  netlify:"https://kagisomphayiasics.netlify.app/",
  description: "Ecommerce website built with JS, HTML and CSS.",
  img: "https://i.postimg.cc/ydwnXmcW/Ecom.png",
},
{
  title: "Cloning a website",
  github: "https://github.com/Kagisomphayi/bootstrap",
  netlify:"https://kagisomphayiclone.netlify.app",
  description: "Cloning DOOB Website using Bootstrap,CSS & HTML.",
  img: "https://i.postimg.cc/Bn9zT044/bootstrapclone.png",
},
{
  title: "Javascript Calculator",
  github: "https://github.com/Kagisomphayi/Calculator",
  netlify:"https://kagisomphayicalculator.netlify.app/",
  description: "Building a functioning calculator(HTML,CSS & JS",
  img: "https://i.postimg.cc/1Xx9wdzT/calculator.png",
},
]

// ROOT NODE
app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});

// ROUTE FOR RESUMES
app.get('/resumes', function (req, res) {
  res.send(resumes);
});


// ROUTE FOR PROJECTS
app.get('/projects', function (req, res) {
  res.send(projects);
});


// ROUTE FOR TESTINONIALS
app.get('/testimonials', function (req, res) {
  res.send(testimonials);
});


// app.get('/names', function (req, res) {
//     res.send("kagiso");
// });


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});