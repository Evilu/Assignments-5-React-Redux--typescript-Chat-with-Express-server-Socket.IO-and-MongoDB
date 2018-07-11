import * as express from "express";
import users from "./../../models/users"

const router = express.Router()

router.get('/', function(req, res, next) {

    users.find()
        .then(data=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).send(err);
        });
});


router.post('/', function(req, res, next) {
    const user = new users({username: "mike", password: 555, age: 31}); //sanity check

    user.save().then(() => {
        users.find()
            .then(data=>{
                res.json(data);
            })
            .catch((err)=>{
                res.status(500).send(err);
            });
    });
});

export default router;