const express= require("express");
const app = express();
const port = 8000;
const path = require("path");

app.get("/", (req, res) => {
    //res.send("hello word");
    res.sendFile(path.join (__dirname + "/index.html"));
});

app.listen(port, () => {
    console.log('server running on port, ', port);
});