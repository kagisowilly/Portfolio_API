const express = require('express');
const app = express();
const cors = require("cors");
const projectRoute = require("./routes/projectRoute");
const testimonialRoute = require("./routes/testimonialRoute");
const resumeRoute = require("./routes/resumeRoute");
const contactRoute = require("./routes/contactRoute");
app.use(cors());
app.use(express.json());

// ROOT API
app.get('/', function (req, res) {
    res.send( 'My Portfolio API');
});


app.use("/projects", projectRoute);
app.use("/contact", contactRoute);
app.use("/testimonials", testimonialRoute);
app.use("/resume", resumeRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log('Press CTRL + C to quit');
  
});