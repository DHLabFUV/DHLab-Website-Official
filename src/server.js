const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/newsletter', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for emails
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pdpawork:OppAKGAj12Vl6E7m@dhweb.ecqj88o.mongodb.net/?retryWrites=true&w=majority&appName=DHWeb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// Create a model for emails
const Email = mongoose.model('Email', emailSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to handle email submissions
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    // Validate email (basic validation)
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }
    // Check if the email already exists in the database
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }
    // Create a new email document and save it to the database
    const newEmail = new Email({ email });
    await newEmail.save();
    // Respond with success message
    res.json({ message: 'Email subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
