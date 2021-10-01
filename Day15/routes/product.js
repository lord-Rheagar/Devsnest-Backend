const express = require("express")
const product = require('../models/product')
const router = express.Router()
const {Op} = require('sequelize')
const { parse } = require("pg-protocol")


router.get("/", async(req,res)=>{
    try{
        const query = req.query;
        const count = parseInt(query.count)|| 10;
        const page = parseInt(query.page)||1;
        const after = parseInt(query.after)

        let sql={}

        if(after){
            sql ={
                where:{
                    id:{
                        [Op.gt]:after
                    }
                }
            }
        } else{
            sql ={
                offset:count*(page -1)
            }
        }
        const products = await product.findAll({
            ...sql,
            attributes:["id", "title", "price", "description", "image"],
            limit:count
        })

        res.status(200).send({
            count:products.length,
            items:products
        })
    }catch(err){
       console.error(err);
       res.status(500).send({
           error:err,
           message:"Can not process the request"
       })
    }
})

module.exports = router