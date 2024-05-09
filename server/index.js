const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

// MongoDB Connection URI
const uri = 'mongodb://localhost:27017/users';
const client = new MongoClient(uri);

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}
connectToMongoDB();

app.post('/api/score', async (req, res) => {
  const { username, score } = req.body; // Extract username and score from request body
  const db = client.db('users');
  const scoresCollection = db.collection('scores');
  
  try {
    // Save username and score to MongoDB
    await scoresCollection.insertOne({ username, score });
    res.status(201).json({ message: 'Score saved successfully', username:username, score:score });
  } catch (err) {
    console.error('Error saving score:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
