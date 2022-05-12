const express=require("express")
const { department, get_by_id } = require("../controller/department")


const router=express.Router()
// const Department=require("../controller/department")

router.get("/department",department)
// router.get("/get_by_id/:de",get_by_id)
router.get("/get_by_id/:department_id",get_by_id)

module.exports=router


