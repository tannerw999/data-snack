// requiring the express and cors libraries
require("dotenv").config();
const {FULL_CONTACT_BEARER_TOKEN, SERVER_PORT} = process.env
const express = require('express');
const cors = require('cors');

// invoking express
const app = express();

// assigning the server port to a variable 'port' for easier use

app.use(express.json());
app.use(cors());

// this sends a request to my server
app.get("/api/user_data", (req, res) => {res.status(200).send("It worked")})

app.listen(SERVER_PORT, () => console.log(`Server is live on port ${SERVER_PORT}.`));
