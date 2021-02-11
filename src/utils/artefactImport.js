const path = require('path');


ai = (...module) => {
    if (module[0] && module[0].startsWith('.')) {
        return require(path.resolve(...module));
    }
    return require(module[0]);
};
ai.cache = require.cache;
ai.main = require.main;
ai.resolve = (request, options = null) => {
    if (request.startsWith('.')) {
        return require.resolve(path.resolve(request), options);
    }
    return require.resolve(request, options);
};
ai.resolve.paths = request => {
    if (request.startsWith('.')) {
        return require.resolve.paths(path.resolve(request));
    }
    return require.resolve.paths(request);
};