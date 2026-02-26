

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

app.post('/save', async (req, res) => {
    const { name } = req.body;
    await client.connect();
    const db = client.db('nameDB');
    await db.collection('names').insertOne({ name });
    res.json({ success: true });
});

app.get('/names', async (req, res) => {
    await client.connect();
    const db = client.db('nameDB');
    const names = await db.collection('names').find().toArray();
    res.json(names);
});

app.listen(3000);
