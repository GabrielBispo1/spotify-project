import { MongoClient } from "mongodb";

const URI = "mongodb+srv://@cluster0.qz9rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyDB");
