const { MongoClient, ServerApiVersion } = require('mongodb');


const express = require('express');
const app = express();
const port = 3000;
const uri = "mongodb+srv://Phanh:Phuonganh22122003@dhweb.ecqj88o.mongodb.net/?retryWrites=true&w=majority&appName=DHWeb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Connect to MongoDB
async function connectDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  connectDB();
  
  // Define API endpoints
  app.post('/submit-email', async (req, res) => {
    try {
      const email = req.body.email;
  
      // Access the database and collection
      const db = client.db('your_database_name');
      const collection = db.collection('emails');
  
      // Insert the email into the collection
      await collection.insertOne({ email });
  
      res.status(201).json({ message: 'Email saved successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).json({ error: 'Error saving email' });
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });