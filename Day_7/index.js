const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.status(200).send("Mummy meri shaadi kardo June wa July me Mummy mera maan nehi college ki padhai me ")
})

app.get(/a/,(req, res)=>{
   res.send('hello')
})
app.get('/user/:userId/books/:bookId',(req,res)=>{
    res.send(req.params)
})

app.get('/products',(req,res)=>{
    res.send(req.query.q)
})

app.listen(5000)