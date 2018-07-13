var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

const directory = {
    root: rootPath,
    distDirString: '/assets',
    distDir: rootPath + '/assets',
    assetsDir: rootPath + '/public'
};

export default directory;

