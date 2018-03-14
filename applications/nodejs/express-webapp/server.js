var Auth = require('./auth/auth');

const express = require('express');
const app = express();

app.use("/public", express.static('public'));

// Static Content
app.get('/', (req,res) => req.redirect("/public/index.html") );

// auth
app.use('/auth', Auth);

// modules
app.listen(3000, () => console.log("Server listening on port 3000"));