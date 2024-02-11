const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;
require('dotenv').config()
//console.log(process.env.DB_USER)

//middleware
app.use(cors());

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://sulanipaboda98:bBHfrHtmzAWIQcSx@cluster0.jburbso.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    console.log("Conneted to MongoDB Successfully")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));


app.get('/', (req, res) => {
  res.send('Restaurant database')
}) 
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// //mongodb config 
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://sulanipaboda98:bBHfrHtmzAWIQcSx@cluster0.jburbso.mongodb.net/?retryWrites=true&w=majority";
// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jburbso.mongodb.net/?retryWrites=true&w=majority&tls=true`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//   version: ServerApiVersion.v1,
//   strict: false,
//   deprecationErrors: true,
//   useNewUrlParser: true, 
//   useUnifiedTopology: true, 
//   ssl: true, 
//   tlsAllowInvalidCertificates: true
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     //database & collections
//     const menuCollections = client.db("db-restaurant").collection("menus");
//     const cartCollections = client.db("db-restaurant").collection("cartItems");

//     //all menu items operations
//     app.get('/menu', async(req, res) => { 
//       const result = await menuCollections.find().toArray();
//       res.send(result)
//     })

//     //cart operations

//     //post a cart to db
//     app.post('/cart', async(req, res) => {
//       const cartItem = req.body;
//       const result = await cartCollections.insertOne(cartItem)
//       res.send(result)
//     })

//     //get cart using email
//     app.get('/cart', async(req, res) => {
//       const email = req.query.email;
//       const filter = {email: email};
//       const result = await cartCollections.find(filter).toArray();
//       res.send(result);
//     })

//     //get specific carts
//     app.get('/cart/:id', async(req, res) => {
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)};
//       const result = await cartCollections.findOne(filter);
//       res.send(result);
//     })

//     //delete items from the cart
//     app.delete('/cart/:id', async(req, res) => {
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)};
//       const result = await cartCollections.deleteOne(filter);
//       res.send(result);
//     })

//     //update cart quantity
//     app.put('/cart/:id', async(req, res) => {
//       const id = req.params.id;
//       const {quantity} = req.body;
//       const filter = {_id: new ObjectId(id)};
//       const options ={ upsert: true };

//       const updateDoc = {
//         $set: {
//           quantity: parseInt(quantity, 10),
//         },
//       };

//       const result = await cartCollections.updateOne(filter, updateDoc, options);
//     })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// app.get('/', (req, res) => {
//     res.send('Restaurant database')
// }) 

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })