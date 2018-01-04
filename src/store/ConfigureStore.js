// dynamic imports not supported in ES6 so we use requires instead
if (process.env.NODE_ENV === 'production'){
    module.exports = require('./ConfigureStore.prod');
} else {
    module.exports = require('./ConfigureStore.dev');
}