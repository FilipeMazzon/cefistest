const express = require('express'),
    router = express.Router();

const Course = require('../controller/Course');

/* GET home page. */
router.get('/', function (req, res, next) {
    Course.listAllCourse(req, res, next);
});

router.get('/course/:id', function (req, res, next) {
    Course.showCourse(req, res, next);
});

module.exports = router;
