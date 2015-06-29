var path = require('path');

module.exports = function () {
    return require(path.join(__dirname , (process.env.NODE_ENV || 'local') + '.json'));
}();/**
 * Created by igg on 6/29/2015.
 */
