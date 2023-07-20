const express = require('express');
const app = express();
// const port = 8000;
const port = process.env.PORT;

require('dotenv').config();
require('.config/mongoose.config')

app.use( express.json() ); //Allows app to accept json
app.use( express.urlencoded({ extended: true }) ); //Allows app to read json

//connects ther server to the routes section. Therefore, attaching all of the routes.
const routeBridge = require("./routes/user.route")
routeBridge(app)

app.listen(port, () => console.log("----> SERVER ONLINE!!!"));