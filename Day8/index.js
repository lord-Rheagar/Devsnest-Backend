const express= require('express')
const app = express()

const checkAdmin =(req, res, next) =>{
     if(req.query.admin ==='true'){
         next()
     }else{
         res.status(400).send("should be admin")
     }
}

app.use(checkAdmin)

const sendRes = (req,res) =>{
    res.status(200)
    res.json(req.query)
};


app.get("/",  sendRes)



app.listen(3001)