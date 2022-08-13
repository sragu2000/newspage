const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 3001;

const db = mysql.createConnection({ user: "root", host: "localhost", password: "", database: "news" });
db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post("/addNews", (req, res) => {
    const heading = req.body.heading;
    const author = req.body.author;
    const news = req.body.news;
    db.query(
        "INSERT INTO news (heading,newsBody,author) values (?,?,?)",[heading, news, author],
        (err, result) => {
            if (err) {
                res.send({ result: false, message: result});
            }
            res.send({ result: true, message: result});
        }
    )
})

app.get("/showNews",(req,res)=>{
    db.query("select * from news order by id desc",(err, result) => {
            if (err) {
                res.json("ERROR");
            }
            res.json(result);
        }
    )
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});