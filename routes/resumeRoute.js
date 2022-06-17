// RESUME ARRAY
let resumes=  [
    {
    id: 1,
    title: "ASSISTANT LECTURER",
    period: "April(2022) - Present",
    description: ``,
    institution: "LifeChoices Coding Academy",
   
  },
  {
    id: 2,
    title: "FULL_STACK DEVELOPER INTERN",
    period: "April(2022) - June(2022)",
    description: `I have been working on real-life projects in the LC Studio, which is the newly launched web development agency for Life Choices run by Project Managers, Team Leaders and Developers.
    I am in the web-apps team and my duties include building websites using JavaScript, Bootstrap, HTML, CSS, Vue.js, Node.js, MongoDb, MySQL and PostgreSQL.`,
    institution: "LC Studios",
   
  },
    {
      id: 3,
      title: "WEB DEVELOPMENT",
      period: "September(2016) - Present",
      description: `Life Choices is a year-long bootcamp where we learn more about Web development and its fundamentals. We also get the oppotunity to learn interpersonal skills.`,
      institution: "LifeChoices Coding Academy",
     
    },
    {
      id: 4,
      title: "CUSTOMER SERVICE",
      description: `I was offered the opportunity to learn the importance of strong and consistent communication; how to handle difficult customers; how to handle complaints; and the value of loyalty in the work place.`,
      institution: "eLearning College",
      
      period: "August(2021)",
    },
    {
      id: 5,
      title: "PRIVATE TUTORING|SELF-LEARNING",
      description: `Throughout the year, I tutored the grade 12 learners from my area maths and physics, and I also used the time in between to
                    teach myself HTML and CSS with the clear help
                    of online resources.`,
      institution: "",

      period: "January 2020 - November 2020",
    },
    {
      id: 6,
      title: "ASSISTING FIRST-YEAR STUDENTS",
      description: `I was assisting first-year Students at the University Of Pretoria with online registration and using peripheral equipment.`,
      institution: "",

      period: "January-February(2018) & January-February(2019)",
    }
    ,

    {
      id: 7,
      title: "PRIVATE TUTORING",
      description: `During this period I was tutoring some of the grade 12
                  learners from my area maths and physics. The experience
                  helped me a lot with improving my communication skills.`,
      institution: "",
      
      period: "January 2015 - December 2015",
    },
    {
      id: 8,
      title: "NATIONAL SENIOR CERTIFICATE",
      description: `During my time at this institution I improved my social skills, and worked more on my time management.`,
      institution: "Mmametlhake High School", 
      period: "January 2012 - December 2014",
    }
  ];

  const express = require("express");
const app = express.Router();

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}

// ROUTE FOR RESUME
app.get('/', function (req, res) {
    res.send(resumes);
  });

// GET ONE RESUME
app.get("/:id", (req, res) => {
  const resume = resumes.find(
    (resume) => resume.id === parseInt(req.params.id)
  );
  if (!resume)
    return res
      .status(404)
      .send({ msg: "The resume with that given id was not found" });
  res.send(resume);
});

// CREATE A RESUME
app.post("/", (req, res) => {
  const { title, description, institution, period, } = req.body;

  if (!title || !description || !institution || !period)
    return res.status(400).send({ msg: "Not all data sent" });

  const resume = {
    id: resumes.length + 1,
    title,
    description,
    institution,
    period,
  };
  resumes.push(resume);
  res.send(resume);
});

// UPDATE RESUME
app.put("/:id", (req, res) => {
  const { title, description, institution,period} = req.body;
  const resume = resumes.find(
    (resume) => resume.id === parseInt(req.params.id)
  );
  if (!resume)
    res
      .status(404)
      .send({ msg: "The resume with the given id was not found" });

  if (title) resumes.title = title;
  if (description) resumes.description = description;
  if (institution) resumes.institution = institution;
  if (period) resumes.period = period;

  res.send(resume);
});

  
// DELETE RESUME
app.delete("/:id", (req, res) => {
  resume = resumes.filter((resume) => resume.id != parseInt(req.params.id));
  fixArrayID(resume);
  res.send({ msg: "Resume has been deleted" });
});

module.exports = app;
  
