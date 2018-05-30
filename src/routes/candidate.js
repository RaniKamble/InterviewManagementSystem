var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/candidateInformationTable', ['candidateInformationTables']);

// Get All candidate Info
router.get('/candidateInfo', function(req, res, next){
    db.candidateInformationTables.find(function(err, candidateInformationTables){
        if(err){
            res.send(err);
        }
        res.json(candidateInformationTables);
    });
});

// Get All IA Info
router.get('/newIAForm', function(req, res, next){
    db.evaluationSheetInformationTables.find(function(err, evaluationSheetInformationTables){
        if(err){
            res.send(err);
        }
        res.json(evaluationSheetInformationTables);
    });
});

// Get Single Task
router.get('/candidateInfo/:id', function(req, res, next){
    db.candinateInformationTables.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, candinate){
        if(err){
            res.send(err);
        }
        res.json(candinate);
    });
});

//Save Candinate Info
router.post('/candidateInfo/newCandidate', function(req, res, next){
    var candinate = req.body;
    //console.log(req.body);
    if(!candinate.firstname || !(candinate.lastname + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.candinateInformationTables.save(candinate, function(err, candinate){
            if(err){
                res.send(err);
            }
            res.json(candinate);
        });
    }
});

// Delete Candinate Info
router.delete('/candidateInfo/:id', function(req, res, next){
    db.candinateInformationTables.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, candinate){
        if(err){
            res.send(err);
        }
        res.json(candinate);
    });
});

// Update Candinate Info
router.put('/candidateInfo/:id', function(req, res, next){
    var candinate = req.body;
    var updcandinateInfo = {};

    if(candinate.name){
        updcandinateInfo.name = candinate.name;
    }

    if(candinate.address){
        updcandinateInfo.address = candinate.address;
    }

    if(!updcandinateInfo){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.candinateInformationTables.update({_id: mongojs.ObjectId(req.params.id)},updcandinateInfo, {}, function(err, candinate){
            if(err){
                res.send(err);
            }
            res.json(candinate);
        });
    }
});

//Save IA Form Details Values
router.post('/newIAForm', function(req, res, next){
    var evaluator = req.body;
    console.log('inside axios',req.body);
    if(!evaluator.candidateName){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.evaluationSheetInformationTables.save(evaluator, function(err, evaluator){
            if(err){
                res.send(err);
            }
            res.json(evaluator);
        });
    }
});

module.exports = router;

