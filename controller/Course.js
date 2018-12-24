const rp = require('../util/requests');

const listAllCourse = (req, res, next) => {
    const uri = `https://cefis.com.br/api/v1/event`;
    rp.get(uri, result => {
        res.render("index", {data: result.data});
    });
};

const showCourse = (req, res, next) => {
    const id = req.params.id;
    const uri = `https://cefis.com.br/api/v1/event/${id}?include=classes`;
    rp.get(uri, result => {
        res.render("course", {data: result.data});
    });
};

exports = module.exports = {
    listAllCourse: listAllCourse,
    showCourse: showCourse
};
