import express from "express"
import cors from "cors"
import { db} from "./connect.js"
import path from "path"

const __dirname = path.resolve();
console.log(__dirname);

const app = express()
const PORT = 3001;

app.use(cors())

app.get("/api/", (req, res) => {
    res.send("Olá Mundo, de novo2")

})

app.get("/api/artists", async(req, res) => {
    res.send(await db.collection("artists").find({}).toArray()
)}
);

app.get("/api/songs", async(req, res) => {
    res.send(await db.collection("songs").find({}).toArray()
)});

app.use(express.static( path.join(__dirname, "../FrontEnd/dist")));

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname,"../FrontEnd/dist/index.html"));
});



app.listen(PORT,() =>{
    console.log("Rodando")

})