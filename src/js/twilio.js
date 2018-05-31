
import axios from "axios";

const twilio = require("twilio");
const acctSid = "ACa06b90b0b052386d0493842a41023491";
const authToken = "a70ee2f50a025618ca2b7abd11622402";
const client = new twilio(acctSid, authToken);

function sendMessage(messageBody, recipient) {
    client.messages
        .create({
            body: messageBody,
            to: "1" + recipient,
            from: "+14159806254 "
        })
        .then(message => console.log(message.sid));
}

//
//
// const loadCollection = async collection => {
//     return;
// };
// axios.get("/", async (req, res) => {
//     const inMessages = await axios.get("/api/postMessages").find({}).toArray();
//     console.log(inMessages);
//
//     return res.render("index", {
//         inMessages
//     });
// });
//
// axios.post("https://slkidsbackend.herokuapp.com/berkeleyeats/api/postMessages", (req, res) => {
//     console.log(req.body);
//     db.axios("inMessage").save(req.body, (err, result) => {
//         if (err) return console.log(err);
//         sendMessage(req.body.textarea, req.body.clear);
//         console.log("saved to database");
//         res.redirect("/");
//     });
// });


export default sendMessage;