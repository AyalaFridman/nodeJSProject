
const express=require('express');
const controller=require('../LocationController.js');
const router=express.Router();

router.get('/',controller.getAll);

router.get('/:id',controller.getById);

router.post('/',controller.insert);

router.put('/:id',controller.update);

router.delete('/:id',controller.delete);

module.exports=router;