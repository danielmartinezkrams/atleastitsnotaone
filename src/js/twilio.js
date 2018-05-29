console.log("May Node be with you");

const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const acctSid = "ACa06b90b0b052386d0493842a41023491";
const authToken = "a70ee2f50a025618ca2b7abd11622402";
const client = new twilio(acctSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

function sendMessage(messageBody, recipient) {
    client.messages
        .create({
            body: messageBody,
            to: "1" + recipient,
            from: "+18316099815"
        })
        .then(message => console.log(message.sid));
}

let db;

MongoClient.connect(
    "mongodb://teige:berkeley1@ds121898.mlab.com:21898/internalassessment2018",
    (err, client) => {
        if (err) return console.log(err);
        db = client.db('internalassessment2018');
        app.listen(3000, () => {
            console.log("listening on 3000");
        });
    }
);


const loadCollection = async collection => {
    return;
};
app.get("/", async (req, res) => {
    const inMessages = await db.collection("inMessage").find({}).toArray();
    console.log(inMessages);

    return res.render("index", {
        inMessages
    });
});

app.post("/postMessages", (req, res) => {
    console.log(req.body);
    db.collection("inMessage").save(req.body, (err, result) => {
        if (err) return console.log(err);
        sendMessage(req.body.textarea, req.body.clear);
        console.log("saved to database");
        res.redirect("/");
    });
});
