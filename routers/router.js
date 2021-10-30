const express=require("express")
const router=express.Router();
const controller=require("../app/controller/stripe")
router.get('/',controller.render)  
router.post('/payment', controller.createCharge)
  
module.exports=router;