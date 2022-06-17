const express = require("express");
const app = express.Router();

function fixArrayID(arr) {
  return arr.forEach((item, index) => (item.id = index + 1));
}
// TESTIMONIALS ARRAY
let testimonials=[
  {
    id:1,
    name: "Godwin Dzvapatsva",
    image: `https://i.postimg.cc/sxwJ0ncd/Godwin.jpg`,
    role: `Head Of Curriculum And Learning | Lifechoices Coding Acardemy`,
    description: `Kagiso is a diligent student who thrives to do the best and is always time concious.I recommend him.`,
  },
  {
    id: 2,
    name: "Azabenathi Pupuma",
    image: "https://i.postimg.cc/289wQKyn/Aza-min.jpg",
    role: `Web developer`,
    description: `Kagiso is one of the hard workers you could come across. He always ensure that he gets the hang of his work and he does not stop until he finishes. He is goal oriented.`,
  },
  {
    id: 3,
    name: "Jason Wandrag",
    image: `https://i.postimg.cc/4y2q3kzX/jason.jpg`,
    role: "Lecturer | Lifechoices Coding Academy",

    description: `Kagiso has a sharp mind and keen intellect. He is both a hard worker and considerate colleague. Kagiso also displays a calm nature, and he is not easily disturbed. He has the making to become an incredible developer, and I wish him all the best for his career.`,
  },
  {
    id:4,
    name: "Nomzuyiseko Mpofu",
    image: `https://i.postimg.cc/43kpwkgH/nomv-min.jpg`,
    role: " Web designer",

    description: `Kagiso is a person of humble character easy to work with and so far he shown dedication and great work ethic.I admire his time management.`,
  },
  {
    id:5,
    name: "Joel Tshimanga Mukanya",
    image: `https://i.postimg.cc/bv9ZSWfQ/Joel.jpg`,
    role: "Lecturer | Lifechoices Coding Academy",
    description: `I have worked closely on a group with Kagiso. He's a team player with good communication skills, not afraid of challenges and always willing to assist where he can.`,
  },
  {
    id:6,
    name: "Ashley Kannermeyer",
    image: `https://i.postimg.cc/fyQYzjZR/Ash.jpg`,
    role: "Web developer",
    description: `Kagiso is a very hard worker and always eager to help.`,
  },
]

// ROUTE FOR TESTIMONIALS
app.get('/', function (req, res) {
    res.send(testimonials);
  });

// GET ONE TESTIMONIAL
app.get("/:id", (req, res) => {
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id === parseInt(req.params.id)
  );
  if (!testimonial)
    return res
      .status(404)
      .send({ msg: "The testimonial with that given id was not found" });
  res.send(testimonial);
});

// CREATE A TESTIMONIAL
app.post("/", (req, res) => {
  const { name, image, role, description,} = req.body;

  if (!name || !image || !role || !description )
    return res.status(400).send({ msg: "Not all data sent" });

  const testimonial = {
    id: testimonials.length + 1,
    name,
    image,
    role,
    description,
  };
  testimonials.push(testimonial);
  res.send(testimonial);
});

// UPDATE TESTIMONIAL
app.put("/:id", (req, res) => {
  const { name, image, role, description, } = req.body;
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id === parseInt(req.params.id)
  );
  if (!testimonial)
    res
      .status(404)
      .send({ msg: "The testimonials with the given id was not found" });

  if (name) testimonials.name = name;
  if (image) testimonials.image = image;
  if (role) testimonials.role = role;
  if (description) testimonials.description = description;
  res.send(testimonial);
});
  
// DELETE TESTIMONIAL
app.delete("/:id", (req, res) => {
  testimonial = testimonials.filter((testimonial) => testimonial.id != parseInt(req.params.id));
  fixArrayID(testimonial);
  res.send({ msg: "testimonial has been deleted" });
});

module.exports = app;