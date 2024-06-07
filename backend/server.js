const express = require("express");
const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

// Connecting to the MongoDB Client
// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// App & Database
const dbName = process.env.DB_NAME;
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Get all the passwords
app.get("/", async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.find({}).toArray();
    res.status(200).json(findResult);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Save a password
app.post("/", async (req, res) => {
  try {
    const password = req.body;
    // Validate input
    if (!password || !password.name || !password.value) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const insertResult = await collection.insertOne(password);
    res.status(201).json({ success: true, result: insertResult });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a password by id
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const deleteResult = await collection.deleteOne({ _id: ObjectId(id) });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: "Password not found" });
    }

    res.status(200).json({ success: true, result: deleteResult });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Close MongoDB client on server shutdown
process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB client closed");
  process.exit();
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
