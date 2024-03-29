const express = require ('express');
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient
const app = express();

MongoClient.connect('mongodb+srv://Houli:Be%40n8678@cluster0.flbfe.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('Listening on 3000...')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req,res) => {
    console.log(req.body)
})