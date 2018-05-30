console.log("May Node be with you");
import axios from "axios";

const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const app = express();
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

AxiosClient.connect(
    "https://slkidsbackend.herokuapp.com/berkeleyeats/api/users/",
    (err, client) => {
        if (err) return console.log(err);
        axios = client.axios('berkeleyeats');
        app.listen(3000, () => {
            console.log("listening on 3000");
        });
    }
);


const loadCollection = async collection => {
    return;
};
app.get("/", async (req, res) => {
    const inMessages = await axios.collection("inMessage").find({}).toArray();
    console.log(inMessages);

    return res.render("index", {
        inMessages
    });
});

app.post("https://slkidsbackend.herokuapp.com/berkeleyeats/api/postMessages", (req, res) => {
    console.log(req.body);
    db.axios("inMessage").save(req.body, (err, result) => {
        if (err) return console.log(err);
        sendMessage(req.body.textarea, req.body.clear);
        console.log("saved to database");
        res.redirect("/");
    });
});

export default sendMessage();