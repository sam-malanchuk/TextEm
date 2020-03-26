require('dotenv').config();

// Dependencies 
// npm i express cors twilio

const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

// Twilio API
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log(process.env.PORT)

const app = express();  // create the server alias

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors()); // blocks browser from restricting data

// server root directory
app.get('/', (req, res) => {
    res.send('Welcome to the TextEm server!')
});

// Twilio Text
app.post('/send', (req, res) => {
    const { recipient, message } = req.body

    client.messages.create({
        body: message,
        to: recipient,
        from: '+17042861326'
    })
    .then((message) => console.log(message.body))
    res.status(200).json("Sent Message: " + message);
});

app.listen(process.env.PORT || 4000, () => console.log("Running on port " + process.env.PORT))