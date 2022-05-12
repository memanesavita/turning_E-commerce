const express=require("express")
const { signup_customer, customersLogin, getCustomersById, customers_put, put_customer_address } = require("../controller/customer")
// const auth = require("../authorization/auth")


const app=express()
const router=require('express').Router()

router.post("/customers",signup_customer)
router.post('/customersLogin',customersLogin)
router.get('/getbyid/:customer_id',getCustomersById)
router.put("/put_customer/:customer_id",customers_put)
router.put("/put_adress/:customer_id",put_customer_address)
// router.put('/put_credit/:credit_card',put_credit_card)
module.exports=router