/**
 * Created by zach on 3/10/17.
 */

const _ = require('lodash');
const async = require('async');

async.series([
    function(cb) {
        console.log('init');
        cb();
    },
    function(cb) {
        console.log('route');
        cb();
    }
    ],
    function(err, results) {
        if (err) {
            console.error(err);
        }
        let msg = 'boot message';
        if (_.isString(msg)) {
            console.log('yup, it is a string');
            console.log(results);
        }
    }
);
