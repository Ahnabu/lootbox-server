const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express()
app.use(express.json())
app.use(
    cors({
        origin: [
            "http://localhost:5173",


        ],
        credentials: true,
    })
);

const port = 5000 || `${process.env.PORT}`
const { MongoClient, ServerApiVersion } = require('mongodb');
//need to change
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cn1yph8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

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
        const dataCollection = client.db('bkash').collection('data')
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const userCollection = client.db('bkash').collection('users')
        app.get('/', (req, res) => {
            res.send("running")
        })
        app.get('/data', async(req, res) => {
            const sorted = req.query.sort;
            const order = req.query.order;
            const filter = req.query.filter;
            const minPrice = parseFloat(req.query.minPrice) || 0;
            const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_SAFE_INTEGER;
            console.log(req.query);
            //search functionality
            let query = {}
            if (filter || minPrice || maxPrice) query = {
                productName: { $regex: filter, $options: 'i' }, price: { $gte: minPrice, $lte: maxPrice }
}
            //sort functionality

            let sortOrder = {}
            if (sorted) sortOrder = { [sorted]: order === 'asc' ? 1 : -1 }
            const result = await dataCollection.find(query).sort(sortOrder).toArray()
            console.log("data passes");
            res.send(result)
       })
      
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close(); 
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})