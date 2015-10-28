var express = require('express');
var router = express.Router();
var Todo = require('../models');
/***
 * 获得所有的数据
 * @param res
 */
function getTodos(res) {
    Todo.find({}, function (err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
}
router.post('/add', function (req, res, next) {
    var dat = req.body;
    Todo.create(dat, function (err, todores) {
        if (err) {
            next(err);
        }
        getTodos(res);
    })
});
router.post('/delete', function (req, res, next) {
    var ids = req.body.ids;
    Todo.remove({_id: {$in: ids}}, function (err, todores) {
        if (err) {
            next(err);
        }
        getTodos(res);
    });
});
router.get('/', function (req, res, next) {
    getTodos(res);
});
module.exports = router;