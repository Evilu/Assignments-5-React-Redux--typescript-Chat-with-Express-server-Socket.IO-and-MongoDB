import * as express from "express";
import groups from "./../../models/groups"
const router = express.Router();

//gets all groups

router.get('/groups', function(req, res) {
    groups.find({}, {name: 1, id: 1, _id: 0}, function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).json({msg: 'server error, could not find groups'});
        }
        res.json(data);
    })
});

// this route returns all groups including private conversation for that user
router.get('/groups/:name', function(req, res) {
    groups.find({ $or: [ {between: req.params.name}, {private: false } ] }, {name: 1, id:1, private: 1, between: 1, _id:0}, function(err, data) {
        if(err) {
            console.log(err);
            return res.status(500).json({msg: 'server error, could not get private groups conversation with users'});
        }
        res.json(data);
    });
});



router.post('/groups', function(req, res) {
    let newGroup = new groups(req.body);
    newGroup.save(function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).json({msg: 'internal server error'});
        }
        res.json(data);
    });
});


export default router;