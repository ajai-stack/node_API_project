const express = require('express')
const employee = require('../models/schema')
const router = express.Router()

router.get('/', (req, resp)=>{
    employee.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
router.get('/:id', (req, resp)=>{
    employee.findById(req.params.id).then(data => {
        resp.json(data)
        }).catch(e => {
            resp.json({message : e})
            })
            })


router.post('/', (req, resp)=>{
    const empdata = new employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        mobilenumber: req.body.mobilenumber   
    })
    empdata.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})

router.put('/:id', (req, resp) => {
    employee.updateOne({_id: req.params.id}, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                mobilenumber: req.body.mobilenumber  
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})

router.delete('/:id', (req, resp)=>{
    employee.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
module.exports = router;