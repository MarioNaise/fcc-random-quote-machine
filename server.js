const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
});


const quoteUrl = "https://zenquotes.io/api/random";