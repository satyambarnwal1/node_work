const express = require('express');
// const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// middleware
app.use(express.static('public'));


// database connection
// const dbURI = 'mongodb+srv://sat1709yam:Mongodb123@cluster0.cifehzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log(err));


const uri = "mongodb+srv://sat1709yam:Mongodb123@cluster0.cifehzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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


// routes
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));


// mongodb+srv://sat1709yam:<password>@cluster0.cifehzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);