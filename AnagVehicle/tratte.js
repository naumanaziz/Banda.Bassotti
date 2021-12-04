var express = require('express');
var router = express.Router();
var context = require("contexts/tratte.js")

router.get('/', (req, res) => {
    try{
        res.status(200).json(context.getAll());
    }catch(err){
        return res.status(500)
    }
});
router.get('/:id', (req, res) => {
    try{
        if(req.params.id){
            var tratta = context.findById(req.params.id)
            if(tratta){
                return res.status(200).json(tratta);
            }
            return res.status(404)
        }
        return res.status(400)

    }catch(err){
        return res.status(500)
    }
});

router.post('', (req, res) => {
    try{
        if(req.body){
            context.add(req.body)
            return res.status(200);
        }
        return res.status(400)

    }catch(err){
        return res.status(500)
    }
});

router.put('', (req, res) => {
    try{
        if(req.body){
            var context.update(req.body)
            return res.status(200);
        }
        return res.status(400)

    }catch(err){
        return res.status(500)
    }
});