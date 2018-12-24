const rp = require('request-promise');

const get = (uri, callback) => {
    const options = {
        uri: uri,
        json: true
    };
    rp(options)
        .then(result => {
            callback(result);
        })
        .catch(err => {
            throw err;
        })
};

exports = module.exports = {
    get: get
};
