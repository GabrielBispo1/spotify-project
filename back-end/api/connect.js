import { MongoClient } from "mongodb";

const URI = "mongodb+srv://gabrielbispo1:aj7xJpeamAl5eZjq@cluster0.qz9rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyDB");