const logger = require('./logger');

const log = function(message) {
    $('body').append(`<h1>${message}</h1>`);
    console.log(message);
    logger.save(message);
}

module.exports = 
{
    log: log
}
