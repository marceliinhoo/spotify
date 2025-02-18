import {MongoClient} from "mongodb";

const URL= "mongodb+srv://spotify:Mm301071@spotify.3r2dg.mongodb.net/?retryWrites=true&w=majority&appName=spotify";

const client = new MongoClient(URL)

export const db = client.db("spotify");


