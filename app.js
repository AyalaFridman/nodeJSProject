require("dotenv").config();
const express = require("express");
const volunteerRouter=require('./api/routers/volunteer.router.js');
const locationRouter=require('./api/routers/location.router.js');
const priorityRouter=require('./api/routers/priority.router.js');
const help_requestRouter=require('./api/routers/help_request.router.js');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
app.use(express.json());

app.use('/api/volunteers',volunteerRouter);

app.use('/api/locations',locationRouter);

app.use('/api/priorities',priorityRouter);

app.use('/api/help_requests',help_requestRouter);

app.listen(port, () => {
  console.log(`http://${host}:${port}`);
});


