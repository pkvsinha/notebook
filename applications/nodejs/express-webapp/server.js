var Auth = require('./lib/auth');

const express = require('express');
const session = require('express-session');
const app = express();

app.use("/public", express.static('public'));

// Static Content
app.get('/', (req,res) => req.redirect("/public/index.html") );

// auth
app.use(session());
app.use('/api', Auth);

// modules
app.listen(3000, () => console.log("Server listening on port 3000"));