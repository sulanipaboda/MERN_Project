const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
require('dotenv').config()
//console.log(process.env.DB_USER)

//middleware
app.use(cors());
app.use(express.json());



//mongodb config 
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://sulanipaboda98:bBHfrHtmzAWIQcSx@cluster0.jburbso.mongodb.net/?retryWrites=true&w=majority";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jburbso.mongodb.net/?retryWrites=true&w=majority&tls=true`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
  version: ServerApiVersion.v1,
  strict: false,
  deprecationErrors: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  ssl: true, 
  tlsAllowInvalidCertificates: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //database & collections
    const menuCollections = client.db("db-restaurant").collection("menus");
    const cartCollections = client.db("db-restaurant").collection("cartItems");

    //all menu items operations
    app.get('/menu', async(req, res) => { 
      const result = await menuCollections.find().toArray();
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})