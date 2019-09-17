const logger = require('./logger');

module.exports = 
{
    log: function(message) {
        $('body').append(message);
        console.log(message);
        logger.save(message);
    }
}
