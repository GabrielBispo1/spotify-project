import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("A variável de ambiente MONGODB_URI não está definida!");
}
const client = new MongoClient(URI);

export const db = client.db("spotifyDB");