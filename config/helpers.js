var path = require('path');
var _root = path.resolve(__dirname, '..')

function root(args) {
    args = Array.prototype.slice.call(arguments,0)
    
    let pathval = path.join.apply(path,[_root].concat(args))
    return pathval
}

exports.root = root