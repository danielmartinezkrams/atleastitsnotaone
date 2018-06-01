const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/send', (req, res) => {
    let SID = "ACa06b90b0b052386d0493842a41023491";
    let TOKEN = "a70ee2f50a025618ca2b7abd11622402";
    let SENDER = "+14159806254";

    if(!SID || !TOKEN) {
        return res.json({message: 'add TWILIO_SID and TWILIO_TOKEN to .env file.'})
    }

    let client = require('twilio')(SID, TOKEN);

    client.sendMessage({
        to: "15106127276",
        from: SENDER,
        body: 'word to your mother.'
    }, (err, responseData) => {
        if (!err) {
            res.json({
                From: responseData.from,
                Body: responseData.body
            })
        }
    })
});


app.listen(port, () => console.log(`Listening on port ${port}`));