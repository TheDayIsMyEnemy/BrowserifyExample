// require('core-js');
const regeneratorRuntime = require("regenerator-runtime");
// global.$ = global.jQuery = require('jquery');
require('./sagepay');
const writer = require('./writer');

class Game {

    reset = () => {
        writer.log('Reset')
    }

    async stop() {
        return Promise.resolve('');
    }

    async start() {
        console.log($);
        this.reset();
        await this.stop();
        writer.log('Starting...');
    }
}
global.Game = Game;
module.exports = Game;
