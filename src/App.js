import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; //stylesheet
import Navbar from './frontend/navbar/navbar';
import WhoAreWe from './frontend/whoarewe/whoarewe';
import Archives from './frontend/archives/archives';
import HomePage from './frontend/homepage/homepage';

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
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/archives" element={<Archives />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;